'use client';
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
  setCharacters: React.Dispatch<React.SetStateAction<Characters[]>>;
  characters: Characters[];
  NUMBER_OF_CHARACTERS: number;
}

export const CharactersContext = createContext<ContextProps>({} as ContextProps);

export const CharactersContextProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [characters, setCharacters] = useState([
    {
      url: '/img/characters/noviceMan.png',
      name: 'Vinha',
      job: 'Novice',
      level: '1',
      exp: '0',
      hp: '100',
      sp: '50',
      str: '1',
      agi: '1',
      vit: '1',
      int: '1',
      dex: '1',
      luk: '1',
    },
  ]);

  const NUMBER_OF_CHARACTERS = characters.length;

  return (
    <CharactersContext.Provider value={{ characters, setCharacters, NUMBER_OF_CHARACTERS }}>
      {children}
    </CharactersContext.Provider>
  );
};

export const useCharacters = (): ContextProps => useContext(CharactersContext);
