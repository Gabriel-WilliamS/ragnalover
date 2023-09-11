'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Howl } from 'howler';

interface ContextProps {
  portigDie: Howl;
  poringMove: Howl;
  poringDamage: Howl;
}
const portigDie = new Howl({
  src: ['/sounds/monsters/poringDie.mp3'],
  volume: 0.2,
  preload: true,
});
const poringMove = new Howl({
  src: ['/sounds/monsters/poringMove.mp3'],
  loop: true,
  volume: 0.2,
  preload: true,
});
const poringDamage = new Howl({
  src: ['/sounds/monsters/poringDamage.mp3'],
  volume: 0.2,
  preload: true,
});

export const MonstersSoundsContext = createContext<ContextProps>({} as ContextProps);

export const MonstersSoundsContextProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  return (
    <MonstersSoundsContext.Provider value={{ portigDie, poringMove, poringDamage }}>
      {children}
    </MonstersSoundsContext.Provider>
  );
};

export const useMonstersSounds = (): ContextProps => useContext(MonstersSoundsContext);
