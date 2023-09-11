'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Howl } from 'howler';

interface ContextProps {
  initialMap: Howl;
}
const initialMap = new Howl({
  src: ['/sounds/maps/training.mp3'],
  loop: true,
  volume: 0.1,
  preload: true,
});

export const MapSoundsContext = createContext<ContextProps>({} as ContextProps);

export const MapSoundsContextProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  return <MapSoundsContext.Provider value={{ initialMap }}>{children}</MapSoundsContext.Provider>;
};

export const useMapSounds = (): ContextProps => useContext(MapSoundsContext);
