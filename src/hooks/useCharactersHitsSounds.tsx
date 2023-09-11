'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Howl } from 'howler';

interface ContextProps {
  hand1: Howl;
}
const hand1 = new Howl({
  src: ['/sounds/hits/hand1.mp3'],
  volume: 0.2,
  preload: true,
});

export const CharactersHitsSoundsContext = createContext<ContextProps>({} as ContextProps);

export const CharactersHitsSoundsContextProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  return (
    <CharactersHitsSoundsContext.Provider value={{ hand1 }}>
      {children}
    </CharactersHitsSoundsContext.Provider>
  );
};

export const useCharactersHitsSounds = (): ContextProps => useContext(CharactersHitsSoundsContext);
