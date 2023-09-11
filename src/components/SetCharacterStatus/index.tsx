import { useState } from 'react';
import { SetCharacterStatusProps } from './types';

export function SetCharacterStatus({
  state,
  value,
  totalPoints,
  setTotalPoints,
}: SetCharacterStatusProps) {
  const [statusValue, setStatusValue] = useState(value);

  function handlePlusStatusValue() {
    if (totalPoints === 0) return;
    setStatusValue(statusValue + 1);
    setTotalPoints(totalPoints - 1);
  }

  function handleMinusStatusValue() {
    if (statusValue === 5) return;
    setStatusValue(statusValue - 1);
    if (totalPoints == 10) return;
    setTotalPoints(totalPoints + 1);
  }

  return (
    <div className='flex'>
      <span className='text w-16 bg-[#C8CEE3] pl-1 font-bold text-[#1d4ed8]'>{state}</span>
      <p className='text w-[180px] bg-[#F1EFF8] text-center font-normal text-zinc-600'>
        {statusValue}
      </p>
      <button
        className='ml-2 w-7 rounded bg-[#9FADDD] text-center text-zinc-600 transition hover:bg-[#afbadd]'
        type='button'
        onClick={handleMinusStatusValue}
      >
        -
      </button>
      <button
        className='ml-2 w-7 rounded bg-[#9FADDD]  text-center text-zinc-600 transition hover:bg-[#afbadd]'
        type='button'
        onClick={handlePlusStatusValue}
      >
        +
      </button>
    </div>
  );
}
