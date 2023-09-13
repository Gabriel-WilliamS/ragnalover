import { Monster } from '@/entities/Monster';

export interface userAttack {
  damage: number;
  sound: Howl;
}

export interface IMonsterRendererProps {
  monster: Monster;
  userAttack: userAttack;
}
