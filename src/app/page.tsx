'use client';
import { TitleHeader } from '@/components/TitleHeader/index';
import Image from 'next/image';
import { GiSoundOn, GiSoundOff } from 'react-icons/gi';
import { Button, InputLabel } from '../components';
import { useEffect } from 'react';
import Link from 'next/link';
import { useSoundBackground } from '@/hooks/useSoundBackground';

export default function Home() {
  const { handleToogleAudio, isPlaying } = useSoundBackground();

  useEffect(() => {
    handleToogleAudio();
  }, []);
  return (
    <main className='relative flex h-screen w-full bg-background-home bg-cover'>
      <div className='mx-auto flex flex-col items-center gap-[300px]'>
        <div className='flex flex-col items-center '>
          <Image src='/img/logo3.png' width={600} height={200} alt='RagnaLove logo' />
        </div>

        <form className='h-fit overflow-hidden rounded bg-white drop-shadow-2xl'>
          <TitleHeader title='LogOn' />

          <div className='flex items-center justify-center p-5'>
            <div className='flex flex-col gap-4'>
              <InputLabel label='Login' id='login' type='email' />
              <InputLabel label='Password' id='password' type='password' />
            </div>
          </div>

          <footer className='flex justify-end border-t border-zinc-400 bg-gradient-to-b from-blue-100/80 to-transparent bg-line bg-repeat-y p-1'>
            <div className='flex gap-2'>
              <Link href='/character/initial'>
                <Button>Login</Button>
              </Link>
              <Button>Exit</Button>
            </div>
          </footer>
        </form>
        <button
          className='absolute bottom-2 right-2 flex cursor-pointer items-center justify-center rounded-full bg-blue-100 p-2 text-5xl text-sky-600 shadow-inner shadow-blue-500/80'
          onClick={handleToogleAudio}
        >
          {isPlaying ? <GiSoundOn /> : <GiSoundOff />}
        </button>
      </div>
    </main>
  );
}
