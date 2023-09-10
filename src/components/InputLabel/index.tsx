import { InputLabelProps } from './types';

export function InputLabel({ label, id, type = 'text', ...rest }: InputLabelProps) {
  return (
    <div className='flex justify-end gap-2'>
      <label className='font-bold text-blue-700' htmlFor={id}>
        {label}
      </label>
      <input
        {...rest}
        className='border border-zinc-300 bg-slate-50/50 px-1 text-sm'
        type={type}
        id={id}
      />
    </div>
  );
}
