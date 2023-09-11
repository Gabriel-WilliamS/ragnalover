'use client';

import { Button, SetCharacterStatus, InputLabel, TitleHeader } from '@/components/index';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { useRouter } from 'next/navigation';

import { useCharacters } from '@/hooks/useCharacters';
export default function CharacterInitial() {
  const [isMancharacterSelected, SetIsMancharacterSelected] = useState(true);
  const [totalPoints, setTotalPoints] = useState(10);
  function tooogleCharacter() {
    SetIsMancharacterSelected(!isMancharacterSelected);
  }
  const router = useRouter();
  const { NUMBER_OF_CHARACTERS } = useCharacters();
  if (NUMBER_OF_CHARACTERS >= 1) {
    router.push('/character/select');
  }

  return NUMBER_OF_CHARACTERS >= 1 ? (
    <main className='relative flex h-screen w-full items-center justify-center bg-background-home bg-cover'>
      <form className='h-fit w-full max-w-[900px] overflow-hidden rounded bg-white drop-shadow-2xl'>
        <TitleHeader title='Character Select' />

        <div className='relative flex h-[300px] items-center justify-between px-8'>
          <div className='flex w-fit flex-col items-center gap-2'>
            <p>{isMancharacterSelected ? 'Man' : 'Woman'}</p>
            <div className='mb-3 flex gap-3'>
              <button
                onClick={tooogleCharacter}
                type='button'
                className='h-fit w-fit hover:scale-125'
              >
                <BsFillCaretLeftFill color='#9FADDD' size={20} />
              </button>
              {isMancharacterSelected ? (
                <div className='relative h-[100px] w-[50px]'>
                  <Image
                    src='/img/characters/noviceMan.png'
                    fill={true}
                    alt='RagnaLove logo'
                    className='w-full object-contain'
                  />
                </div>
              ) : (
                <div className='relative h-[100px] w-[50px]'>
                  <Image
                    src='/img/characters/noviceWoman.png'
                    fill={true}
                    alt='RagnaLove logo'
                    className='w-full object-contain'
                  />
                </div>
              )}

              <button
                onClick={tooogleCharacter}
                type='button'
                className='h-fit w-fit hover:scale-125'
              >
                <BsFillCaretRightFill color='#9FADDD' size={20} />
              </button>
            </div>
            <InputLabel label='Name' />
          </div>
          <div></div>
          <div className='absolute inset-0 -z-10 opacity-5'>
            <Image
              src='/img/logo3.png'
              fill={true}
              alt='RagnaLove logo'
              className='w-full object-contain'
            />
          </div>

          <div>
            <p className='font-bold text-zinc-600'>
              Distribua os pontos: <span className='font-medium'>{totalPoints} pontos</span>{' '}
            </p>
            <div className='flex flex-col gap-[2px]'>
              <SetCharacterStatus
                state='STR'
                value={5}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
              <SetCharacterStatus
                state='AGI'
                value={5}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
              <SetCharacterStatus
                state='VIT'
                value={5}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
              <SetCharacterStatus
                state='INT'
                value={5}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
              <SetCharacterStatus
                state='DEX'
                value={5}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
              <SetCharacterStatus
                state='LUK'
                value={5}
                totalPoints={totalPoints}
                setTotalPoints={setTotalPoints}
              />
            </div>
          </div>
        </div>

        <footer className='flex justify-end border-t border-zinc-400 bg-gradient-to-b from-blue-100/80 to-transparent bg-line bg-repeat-y p-1'>
          <div className='flex gap-2'>
            <Link href='/character/select'>
              <Button>Criar</Button>
            </Link>
            <Link href='/'>
              <Button>Voltar</Button>
            </Link>
          </div>
        </footer>
      </form>
    </main>
  ) : (
    <main className='relative flex h-screen w-full items-center justify-center bg-background-home bg-cover'></main>
  );
}
