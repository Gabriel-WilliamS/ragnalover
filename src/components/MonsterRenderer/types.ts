import { Character } from '@/entities/Character';
import { Monster } from '@/entities/Monster';

export interface IMonsterRendererProps {
  monster: Monster;
  character: Character;
  setMonstersSpawned: React.Dispatch<React.SetStateAction<Monster[]>>;
}
