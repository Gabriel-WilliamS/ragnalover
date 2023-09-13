import { Monster } from '@/entities/Monster';
import { Howl } from 'howler';
export class Poring extends Monster {
  constructor() {
    super({
      id: 1,
      name: 'Poring',
      img: '/img/monsters/1002-poring.png',
      hp: 60,
      sp: 50,
      totalHp: 60,
      soundDamage: new Howl({
        src: ['/sounds/monsters/poringDamage.mp3'],
        volume: 0.2,
        preload: true,
      }),
      soundDie: new Howl({
        src: ['/sounds/monsters/poringDie.mp3'],
        volume: 0.2,
        preload: true,
      }),
    });
  }
}
