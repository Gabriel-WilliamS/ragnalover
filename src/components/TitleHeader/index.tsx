import { ActionButton } from '../index';
import { TitleHeaderProps } from './types';

export function TitleHeader({ title, handleMouseDown }: TitleHeaderProps) {
  return (
    <div
      className='flex cursor-pointer items-center justify-between border-b border-zinc-400 bg-gradient-to-b from-[#d3f0f4] via-[#a7bbf6] to-[#d3f0f4] px-1'
      onMouseDown={handleMouseDown}
    >
      <div className='flex items-center gap-1'>
        <ActionButton />
        <span>{title}</span>
      </div>
    </div>
  );
}
