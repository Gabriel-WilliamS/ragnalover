import { CharacterStatusBar } from '../CharacterStatusBar';
import { useState, useEffect } from 'react';
import { VT323 } from 'next/font/google';
const vt323 = VT323({ weight: '400', subsets: ['latin'] });

import { IMonsterRendererProps } from './types';
import { Status } from '@/entities/Monster';

export function MonsterRenderer({ monster, character, setMonstersSpawned }: IMonsterRendererProps) {
  const [historyDamage, setHistoryDamage] = useState<number[]>([]);
  const [monsterStatus, setMonsterStatus] = useState<Status>('idle');

  function handleAttack() {
    const damage = character.handleAttack(setHistoryDamage);
    monster.handleDamage(damage, setHistoryDamage);

    if (monster.handleVerifyDie()) {
      setMonsterStatus('die');
      character.handleUpdateBaseExp(monster.exp);

      setTimeout(() => {
        setMonstersSpawned(oldMonsters =>
          oldMonsters.filter(oldMonster => oldMonster.id !== monster.id)
        );
      }, 200);
    }
  }

  return (
    <div
      className={`absolute flex cursor-attack select-none flex-col items-center gap-2 rounded-full p-10 ${
        monsterStatus === 'die' && 'animate-death'
      }`}
      style={{ left: monster.position.x, top: monster.position.y }}
      onClick={handleAttack}
    >
      <img
        src={monster.img}
        alt='ground'
        className={`w-[60px] ${monster.status === 'attack' && 'animate-mosterAttack'}`}
      />
      {historyDamage.map((damage, index) => (
        <div
          key={index}
          className={`${vt323.className} absolute -top-10 animate-damage text-6xl font-black text-white`}
        >
          {damage}
        </div>
      ))}
      <div>
        <CharacterStatusBar currentValue={monster.hp} maxValue={monster.totalHp} type='enemy' />
      </div>
    </div>
  );
}
