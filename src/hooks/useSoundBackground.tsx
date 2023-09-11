'use client';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { Howl } from 'howler';

interface ContextProps {
  handleToogleAudio(): void;
  isPlaying: boolean;
  sound: Howl;
}
const sound = new Howl({
  src: ['/sounds/title.mp3'],
  loop: true,
  volume: 0.5,
});

export const SoundBackgroundContext = createContext<ContextProps>({} as ContextProps);

export const SoundBackgroundContextProvider = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(true);

  function handleToogleAudio() {
    if (sound.playing()) {
      sound.pause();
      setIsPlaying(true);
    } else {
      sound.play();
      setIsPlaying(false);
    }
  }

  return (
    <SoundBackgroundContext.Provider value={{ sound, handleToogleAudio, isPlaying }}>
      {children}
    </SoundBackgroundContext.Provider>
  );
};

export const useSoundBackground = (): ContextProps => useContext(SoundBackgroundContext);
