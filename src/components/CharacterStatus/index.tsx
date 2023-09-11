import { CharacterStatusProps } from './types';

export function CharacterStatus({ state, value }: CharacterStatusProps) {
  return (
    <div className='flex'>
      <span className='text w-16 bg-[#C8CEE3] pl-1 font-bold text-[#1d4ed8]'>{state}</span>
      <p className='text w-[180px] bg-[#F1EFF8] pl-2 text-left font-normal text-zinc-600'>
        {value}
      </p>
    </div>
  );
}
