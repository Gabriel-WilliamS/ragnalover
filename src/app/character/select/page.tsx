'use client';

import { Button, CharacterStatus, InputLabel, TitleHeader } from '@/components';
import { CharacterSelectImage } from '@/components/';
import { Characters, useCharacters } from '@/hooks/useCharacters';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';

export default function Select() {
  const [characterSelected, setCharacterSelected] = useState(0);
  const { characters } = useCharacters();

  for (let index = 0; characters.length < 3; index++) {
    characters.push({} as Characters);
  }

  function handlePrevCharacter() {
    if (characterSelected === 0) {
      setCharacterSelected(characters.length - 1);
    } else {
      setCharacterSelected(characterSelected - 1);
    }
  }

  function handleNextCharacter() {
    if (characterSelected === characters.length - 1) {
      setCharacterSelected(0);
    } else {
      setCharacterSelected(characterSelected + 1);
    }
  }
  return (
    <main className='relative flex h-screen w-full items-center justify-center bg-background-home bg-cover'>
      <form className='h-fit w-full max-w-[900px] overflow-hidden rounded bg-white drop-shadow-2xl'>
        <TitleHeader title='Character Select' />
        <div className='relative flex h-[500px] flex-col justify-between p-8'>
          <div className='flex items-center gap-7 self-center'>
            <button
              type='button'
              className='h-fit w-fit hover:scale-125'
              onClick={handlePrevCharacter}
            >
              <BsFillCaretLeftFill color='#9FADDD' size={20} />
            </button>

            {characters.map((character, index) => {
              const isSelected = index === characterSelected;
              return (
                <CharacterSelectImage
                  key={index}
                  index={index}
                  url={character.url}
                  isSelected={isSelected}
                  setCharacterSelected={setCharacterSelected}
                />
              );
            })}
            {}
            <button
              type='button'
              className='h-fit w-fit hover:scale-125'
              onClick={handleNextCharacter}
            >
              <BsFillCaretRightFill color='#9FADDD' size={20} />
            </button>
          </div>
          <div className='flex'>
            <div className='flex flex-col gap-[2px]'>
              <CharacterStatus state='Name' value={characters[characterSelected].name} />
              <CharacterStatus state='Job' value={characters[characterSelected].job} />
              <CharacterStatus state='Lv.' value={characters[characterSelected].level} />
              <CharacterStatus state='EXP' value={characters[characterSelected].exp} />
              <CharacterStatus state='HP' value={characters[characterSelected].hp} />
              <CharacterStatus state='SP' value={characters[characterSelected].sp} />
            </div>
            <div className='flex flex-col gap-[2px]'>
              <CharacterStatus state='STR' value={characters[characterSelected].str} />
              <CharacterStatus state='AGI' value={characters[characterSelected].agi} />
              <CharacterStatus state='VIT' value={characters[characterSelected].vit} />
              <CharacterStatus state='INT' value={characters[characterSelected].int} />
              <CharacterStatus state='DEX' value={characters[characterSelected].dex} />
              <CharacterStatus state='LUK' value={characters[characterSelected].luk} />
            </div>
            <div className='absolute inset-0 -z-10 opacity-5'>
              <Image
                src='/img/logo3.png'
                fill={true}
                alt='RagnaLove logo'
                className='w-full object-contain'
              />
            </div>
          </div>
        </div>
        <footer className='flex justify-end border-t border-zinc-400 bg-gradient-to-b from-blue-100/80 to-transparent bg-line bg-repeat-y p-1'>
          <div className='flex gap-2'>
            <Link
              href={
                characters[characterSelected].name == undefined ? '/character' : '/maps/training'
              }
            >
              <Button>{characters[characterSelected].name == undefined ? 'Criar' : 'OK'}</Button>
            </Link>
            <Link href='/'>
              <Button>cancel</Button>
            </Link>
          </div>
        </footer>
      </form>
    </main>
  );
}
