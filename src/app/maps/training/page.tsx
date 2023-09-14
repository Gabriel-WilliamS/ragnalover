'use client';

import { CharacterStatusBar } from '@/components';
import { Window } from '@/components/Window/intex';
import { useMapSounds } from '@/hooks/useMapSounds';
import { useSoundBackground } from '@/hooks/useSoundBackground';
import { use, useEffect, useState } from 'react';
import { MonsterRenderer } from '@/components/MonsterRenderer';
import { Poring } from '@/monsters/poring';
import { Fabre } from '@/monsters/Fabre';
import { Monster } from '@/entities/Monster';
import { useCharacters } from '@/hooks/useCharacters';

export default function Training() {
  const { initialMap } = useMapSounds();
  const { sound } = useSoundBackground();
  const [staps, setStaps] = useState(0);
  const [monstersSpawned, setMonstersSpawned] = useState<Monster[]>([]);
  const { character } = useCharacters();
  useEffect(() => {
    sound.stop();
    monstersSpawned;
    if (initialMap.playing()) return;
    initialMap.play();
    spawnMonster();
  }, []);
  useEffect(() => {
    if (monstersSpawned.length < 3) {
      spawnMonster();
    }
  }, [monstersSpawned]);

  function spawnMonster() {
    const safeArea = {
      left: window.innerWidth * 0.2,
      top: window.innerHeight * 0.2,
      right: window.innerWidth * 0.7,
      bottom: window.innerHeight * 0.7,
    };

    const randomX = Math.random() * (safeArea.right - safeArea.left) + safeArea.left;
    const randomY = Math.random() * (safeArea.bottom - safeArea.top) + safeArea.top;
    const randomPosition = { x: randomX, y: randomY };

    const monsterNearby = monstersSpawned.find(monster => {
      const distance = Math.sqrt(
        Math.pow(monster.position.x - randomPosition.x, 2) +
          Math.pow(monster.position.y - randomPosition.y, 2)
      );
      return distance < 100;
    });
    if (monsterNearby) {
      spawnMonster();
      return;
    }

    const random = Math.random();
    if (random <= 0.8) {
      setMonstersSpawned(oldMonsters => [...oldMonsters, new Poring(randomPosition)]);
      return;
    }
    if (random > 0.8) {
      setMonstersSpawned(oldMonsters => [...oldMonsters, new Fabre(randomPosition)]);
      return;
    }
  }

  return (
    <main className='relative flex h-screen w-full select-none'>
      <img src='/img/maps/traning.png' alt='ground' className='z-0 scale-150' />
      {staps === 0 && (
        <>
          <div className='absolute bottom-0 z-0 h-[300px] w-full bg-black opacity-50' />
          <div className='absolute bottom-0 z-10 flex h-[300px] w-full items-center justify-center px-[120px]'>
            <div className='absolute -top-20 left-20 z-30 h-48 w-48'>
              <img src='/img/characters/poringNatal.png' alt='ground' />
            </div>
            <div className='absolute left-[300px] top-3 z-30 w-48'>
              <p className='text-xl font-bold text-white'>PoringLover</p>
            </div>
            <div className='relative z-0 flex h-2/3 w-full flex-col rounded-xl bg-slate-100 px-[160px] py-5'>
              <p className='text-xl font-medium text-zinc-800'>
                Bem vindo ao mundo mágico de RagnaLover, onde os velhos tempos do Ragnarok Online
                ganham vida novamente! Prepare-se para uma jornada épica, repleta de nostalgia,
                aventuras emocionantes e a camaradagem que tornou Ragnarok Online um jogo
                inesquecível.
              </p>
              <button
                className='absolute bottom-4 right-4 cursor-pointer'
                onClick={() => setStaps(staps + 1)}
              >
                <p className='text-xl font-bold text-indigo-800'>Começar</p>
              </button>
            </div>
          </div>
        </>
      )}
      {staps > 0 && (
        <>
          <Window.Root title='Basic Info' className='z-50 w-[300px]' width={300} height={194}>
            <div className='flex flex-col gap-1 p-2 text-xs font-medium'>
              <p>Vinha</p>
              <p>Novice</p>

              <div className='flex items-center gap-1'>
                <div>
                  <p>HP</p>
                  <p>SP</p>
                </div>
                <div className='flex flex-col gap-1'>
                  <CharacterStatusBar currentValue={10} maxValue={50} />
                  <CharacterStatusBar currentValue={50} maxValue={50} />
                </div>
              </div>

              <div className='flex w-full gap-2 rounded-md bg-slate-100 px-3 py-1'>
                <div className='flex flex-col justify-between'>
                  <p className='whitespace-nowrap'>Base Lv. {character.baseLv}</p>
                  <p className='whitespace-nowrap'>Job Lv. 1</p>
                </div>
                <div className='flex w-full flex-col justify-evenly'>
                  <CharacterStatusBar
                    currentValue={character.baseExp}
                    maxValue={character.baseMaxExp}
                    type='experience'
                  />
                  <CharacterStatusBar currentValue={50} maxValue={50} type='experience' />
                </div>
              </div>
            </div>
            <Window.Footer>
              <p>Weight: 0/0</p> <span>Zeny: 0</span>
            </Window.Footer>
          </Window.Root>
          {monstersSpawned.length > 0
            ? monstersSpawned.map(monster => (
                <MonsterRenderer
                  key={monster.id}
                  monster={monster}
                  character={character}
                  setMonstersSpawned={setMonstersSpawned}
                />
              ))
            : null}
        </>
      )}
    </main>
  );
}
