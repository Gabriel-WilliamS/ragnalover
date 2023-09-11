'use client';
import { ButtonProps } from './types';
import { Howl } from 'howler';

export function Button({ children, ...rest }: ButtonProps) {
  var sound = new Howl({
    src: ['/sounds/buttonSoundMain.mp3'],
  });

  const handleClick = () => {
    sound.play();
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      type='button'
      className='flex w-20 cursor-pointer items-center justify-center  rounded-md border bg-white py-1 text-xs font-normal text-zinc-800 shadow-inner shadow-indigo-500/80 transition-colors hover:bg-[#4467ff30]'
    >
      {children}
    </button>
  );
}
