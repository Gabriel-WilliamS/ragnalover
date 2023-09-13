import { CharacterStatusBar } from '../CharacterStatusBar';
import { useState } from 'react';
import { VT323 } from 'next/font/google';
const vt323 = VT323({ weight: '400', subsets: ['latin'] });

import { IMonsterRendererProps } from './types';

export function MonsterRenderer({ monster, character }: IMonsterRendererProps) {
  const [historyDamage, setHistoryDamage] = useState<number[]>([]);
  const [monsterStatus, setMonsterStatus] = useState<'idle' | 'attack' | 'die'>('idle');
  function handleAttack() {
    setMonsterStatus('idle');
    character.handleAttack(monster, setHistoryDamage);
    if (monster.status === 'die') {
      setMonsterStatus('die');
      monster.soundDie.play();
      monster.handleRespawn();
    }
  }

  return (
    <div
      className={`relative flex cursor-attack select-none flex-col items-center gap-2 rounded-full p-10 ${
        monsterStatus === 'die' && 'animate-death'
      }`}
      onClick={handleAttack}
    >
      <img src={monster.img} alt='ground' className='w-[80px]' />
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
