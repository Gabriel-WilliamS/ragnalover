import { CharacterStatusBar } from '../CharacterStatusBar';
import { useState } from 'react';
import { VT323 } from 'next/font/google';
const vt323 = VT323({ weight: '400', subsets: ['latin'] });

import { IMonsterRendererProps } from './types';

export function MonsterRenderer({ monster, userAttack }: IMonsterRendererProps) {
  const [historyDamage, setHistoryDamage] = useState<number[]>([]);
  const [monsterStatus, setMonsterStatus] = useState<'idle' | 'attack' | 'die'>('idle');
  function handleAttack() {
    setMonsterStatus('idle');
    userAttack.sound.play();
    monster.soundDamage.play();

    monster.handleDamage(userAttack.damage);
    setHistoryDamage(historyDamage => [...historyDamage, userAttack.damage]);
    if (monster.status === 'die') {
      setHistoryDamage([]);
      setMonsterStatus('die');
      monster.soundDie.play();
      monster.handleRespawn();
    }
  }

  console.log(monster.status);
  return (
    <div
      className={`relative flex cursor-attack select-none flex-col items-center gap-2 rounded-full p-10 ${
        monsterStatus === 'die' && 'animate-death'
      }`}
      onClick={handleAttack}
    >
      <img src='/img/monsters/1002-poring.png' alt='ground' className='w-[80px]' />
      {historyDamage.map((_, index) => (
        <div
          key={index}
          className={`${vt323.className} absolute -top-10 animate-damage text-6xl font-black text-white`}
        >
          {userAttack.damage}
        </div>
      ))}
      <div>
        <CharacterStatusBar currentValue={monster.hp} maxValue={monster.totalHp} type='enemy' />
      </div>
    </div>
  );
}
