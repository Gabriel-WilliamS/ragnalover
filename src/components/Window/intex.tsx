import { TitleHeader } from '..';
import { WindowFooterProps, WindowRootProps } from './types';
import { twMerge } from 'tailwind-merge';
import { useRef, useState } from 'react';

function WindowRoot({ children, title, className, width, height }: WindowRootProps) {
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const offset = useRef({ offsetX: 0, offsetY: 0 });

  const handleMouseDown = (e: any) => {
    e.preventDefault();
    offset.current = {
      offsetX: e.clientX - transform.x,
      offsetY: e.clientY - transform.y,
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: any) => {
    e.preventDefault();

    let x = e.clientX - offset.current.offsetX;
    let y = e.clientY - offset.current.offsetY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const maxX = windowWidth - width;
    const maxY = windowHeight - height;

    setTransform({
      x: Math.max(0, Math.min(x, maxX)),
      y: Math.max(0, Math.min(y, maxY)),
    });
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };
  return (
    <div
      className={twMerge(
        'absolute h-fit select-none overflow-hidden rounded bg-white drop-shadow-2xl',
        className
      )}
      style={{
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }}
    >
      <TitleHeader title={title} handleMouseDown={handleMouseDown} />
      {children}
    </div>
  );
}

function WindowFooter({ children }: WindowFooterProps) {
  return (
    <footer className='flex justify-end border-t border-zinc-400 bg-gradient-to-b from-blue-100/80 to-transparent bg-line bg-repeat-y p-1'>
      <div className='flex gap-2'>{children}</div>
    </footer>
  );
}

export const Window = {
  Root: WindowRoot,
  Footer: WindowFooter,
};
