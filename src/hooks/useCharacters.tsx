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
  characters: Character[];
}

export const CharactersContext = createContext<ContextProps>({} as ContextProps);

export const CharactersContextProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const character: Character = new Character({
    name: 'Vinha',
    img: '/img/characters/noviceMan.png',
    hit: 10,
    STR: 1,
    AGI: 1,
    VIT: 1,
    INT: 1,
    DEX: 1,
    LUK: 1,
  });
  const [characters, setCharacters] = useState<Character[]>([character]);

  return (
    <CharactersContext.Provider value={{ character, characters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = (): ContextProps => useContext(CharactersContext);
