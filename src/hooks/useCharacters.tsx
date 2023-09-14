'use client';
import { Character } from '@/entities/Character';
import { createContext, ReactNode, useContext, useState } from 'react';

export interface Characters {
  url: string;
  name: string;
  job: string;
  level: string;
  exp: string;
  hp: string;
  sp: string;
  str: string;
  agi: string;
  vit: string;
  int: string;
  dex: string;
  luk: string;
}

interface ContextProps {
  character: Character;
}

export const CharactersContext = createContext<ContextProps>({} as ContextProps);

export const CharactersContextProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const character: Character = new Character({ hit: 10, aspd: 99 });

  return <CharactersContext.Provider value={{ character }}>{children}</CharactersContext.Provider>;
};

export const useCharacters = (): ContextProps => useContext(CharactersContext);
