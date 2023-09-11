import Image from 'next/image';
import { CharacterSelectImageProps } from './types';
import { useState } from 'react';

export function CharacterSelectImage({
  url,
  isSelected,
  index,
  setCharacterSelected,
}: CharacterSelectImageProps) {
  return (
    <div
      className='relative flex h-[200px] w-[200px] cursor-pointer items-center justify-center border-indigo-200 bg-gradient-to-b from-[#AABEE0] to-[#7B9CD0] p-1 '
      data-selected={isSelected}
      onClick={() => setCharacterSelected(index)}
    >
      <div className='back flex h-full w-full items-center justify-center bg-white'>
        <div
          data-selected={isSelected}
          className='absolute left-1 top-0 hidden w-[100px] rounded-br-lg bg-gradient-to-b from-[#AABEE0] to-[#A5BBDF]  data-[selected=true]:flex data-[selected=true]:bg-indigo-400'
        >
          <p className='font-extrabold text-white drop-shadow-md'>Select</p>
        </div>
        <div className='relative h-[150px] w-[50px]'>
          {url ? (
            <Image src={url} fill={true} alt='Character' className='h-full w-full object-contain' />
          ) : null}
        </div>
      </div>
    </div>
  );
}
