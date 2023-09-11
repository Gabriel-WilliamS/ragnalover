import { ActionButtonProps } from './types';

export function ActionButton({ children, ...rest }: ActionButtonProps) {
  return (
    <button
      {...rest}
      className='flex h-3 w-3 cursor-pointer items-center justify-center rounded-full border border-[#264b78] bg-gradient-to-r from-[#587EEE] via-[#BDD6F5] to-[#587EEE]'
    >
      {children}
    </button>
  );
}
