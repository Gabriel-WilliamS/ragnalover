"use client";
import { ButtonProps } from "./types";
import { Howl } from "howler";

export function Button({ children, ...rest }: ButtonProps) {
  var sound = new Howl({
    src: ["./sounds/buttonSoundMain.mp3"]
  });

  const handleClick = () => {
    sound.play();
  };

  return (
    <button
      {...rest}
      onClick={handleClick}
      type="button"
      className="flex items-center justify-center w-20  border rounded-md bg-white shadow-inner shadow-indigo-500/80 text-zinc-800 py-1 text-xs font-normal hover:bg-[#4467ff30] transition-colors"
    >
      {children}
    </button>
  );
}
