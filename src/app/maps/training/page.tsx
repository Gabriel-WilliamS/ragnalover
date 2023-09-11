'use client';

import { CharacterStatusBar } from '@/components';
import { Window } from '@/components/Window/intex';
import { useMapSounds } from '@/hooks/useMapSounds';
import { useSoundBackground } from '@/hooks/useSoundBackground';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useMonstersSounds } from './context/useMonstersSounds';
import { useCharactersHitsSounds } from '@/hooks/useCharactersHitsSounds';
import { VT323 } from 'next/font/google';

const vt323 = VT323({ weight: '400', subsets: ['latin'] });

export default function Training() {
  const { initialMap } = useMapSounds();
  const { sound } = useSoundBackground();
  const { poringDamage, portigDie } = useMonstersSounds();
  const { hand1 } = useCharactersHitsSounds();
  const [staps, setStaps] = useState(0);
  const [monsterStatus, setMonsterStatus] = useState({
    hp: 50,
    sp: 50,
    totalHp: 50,
  });

  useEffect(() => {
    sound.stop();
    if (initialMap.playing()) return;
    initialMap.play();
  }, []);

  function handleAttack() {
    hand1.play();
    poringDamage.play();
    setMonsterStatus({
      ...monsterStatus,
      hp: monsterStatus.hp - 5,
    });

    if (monsterStatus.hp <= 5) {
      setMonsterStatus({
        ...monsterStatus,
        hp: 50,
      });
      portigDie.play();
    }
  }
  console.log(portigDie.playing());

  return (
    <main className='relative flex h-screen w-full select-none'>
      <Image src='/img/maps/traning.png' alt='ground' layout='fill' className='z-0 scale-150' />
      {staps === 0 && (
        <>
          <div className='absolute bottom-0 z-0 h-[300px] w-full bg-black opacity-50' />
          <div className='absolute bottom-0 z-10 flex h-[300px] w-full items-center justify-center px-[120px]'>
            <div className='absolute -top-20 left-20 z-30 h-48 w-48'>
              <Image src='/img/characters/poringNatal.png' alt='ground' layout='fill' />
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

              <div className='w-full rounded-md bg-slate-100 px-3 py-1'>
                <p>Base Lv. 1</p>
                <p>Job Lv. 1</p>
              </div>
            </div>
            <Window.Footer>
              <p>Weight: 0/0</p> <span>Zeny: 0</span>
            </Window.Footer>
          </Window.Root>
          <div className='absolute left-1/2 top-1/2 z-10'>
            <div
              className={`cursor-attack flex select-none flex-col items-center gap-2 rounded-full p-10 ${
                portigDie.playing() && 'animate-death'
              }`}
              onClick={handleAttack}
            >
              <Image
                src='http://db.irowiki.org/image/monster/1002.png'
                alt='ground'
                width={100}
                height={100}
              />
              <div>
                <CharacterStatusBar
                  currentValue={monsterStatus.hp}
                  maxValue={monsterStatus.totalHp}
                  type='enemy'
                />
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}