export interface CharacterSelectImageProps {
  url?: string;
  isSelected: boolean;
  setCharacterSelected: (value: number) => void;
  index: number;
}
