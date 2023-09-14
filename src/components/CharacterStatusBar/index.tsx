import { CharacterStatusBarProps } from './types';
import { tv } from 'tailwind-variants';

const barstyle = tv({
  base: 'h-3 border-zinc-400 shadow',
  variants: {
    color: {
      health: 'bg-gradient-to-b from-[#d3f0f4] via-[#a7bbf6] to-[#d3f0f4]',
      enemy: 'bg-gradient-to-l from-[#860909] via-[#ff3636] to-[#860909]',
      experience: 'bg-[#567BC1]',
    },
  },
});

const barstyle2 = tv({
  base: 'relative flex  h-3 overflow-hidden shadow-inner',
  variants: {
    type: {
      health: 'w-[200px] rounded-full bg-gray-100',
      enemy: 'w-[80px] h-[8px] bg-indigo-950 border border-zinc-950 text-zinc-300',
      experience: 'w-full h-[8px] bg-white border border-zinc-950 text-zinc-300',
    },
  },
});

export function CharacterStatusBar({
  currentValue,
  maxValue,
  type = 'health',
}: CharacterStatusBarProps) {
  const percentage = (currentValue / maxValue) * 100;

  return (
    <div className='flex w-full items-center justify-start gap-1'>
      <div className={barstyle2({ type: type })}>
        <div className='absolute left-2/4 flex w-fit -translate-x-2/4 gap-1 self-center text-xs'>
          {type == 'health' && (
            <>
              <span>{currentValue}</span>
              <span>/</span>
              <span>{maxValue}</span>
            </>
          )}
        </div>
        <div className={barstyle({ color: type })} style={{ width: `${percentage}%` }} />
      </div>
      {type == 'health' && <p className='text-xs'>{percentage}%</p>}
    </div>
  );
}
