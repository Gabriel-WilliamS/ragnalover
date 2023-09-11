export interface SetCharacterStatusProps {
  state: string;
  value: number;
  totalPoints: number;
  setTotalPoints: (value: number) => void;
}
