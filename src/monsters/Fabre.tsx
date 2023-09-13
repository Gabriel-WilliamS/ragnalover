import { Monster } from '@/entities/Monster';
import { Howl } from 'howler';
export class Fabre extends Monster {
  constructor() {
    super({
      id: 1,
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
        volume: 0.3,
        preload: true,
      }),
    });
  }
}
