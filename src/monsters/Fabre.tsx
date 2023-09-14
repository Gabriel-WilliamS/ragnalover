import { Monster } from '@/entities/Monster';
import { Howl } from 'howler';
export class Fabre extends Monster {
  constructor(position: { x: number; y: number }) {
    super({
      id: Math.floor(Math.random() * 1000000),
      name: 'Fabre',
      img: '/img/monsters/1007-fabre.png',
      hp: 72,
      sp: 50,
      totalHp: 72,
      soundDamage: new Howl({
        src: ['/sounds/monsters/fabreDamage.mp3'],
        volume: 0.2,
        preload: true,
      }),
      soundDie: new Howl({
        src: ['/sounds/monsters/fabreDie.mp3'],
        volume: 0.8,
        preload: true,
      }),
      position: position,
      exp: 15,
    });
  }
}
