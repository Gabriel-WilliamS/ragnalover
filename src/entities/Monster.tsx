interface MonsterInput {
  id: number;
  name: string;
  img: string;
  hp: number;
  sp: number;
  totalHp: number;
  soundDie: Howl;
  soundDamage: Howl;
}

export class Monster {
  id: number;
  name: string;
  img: string;
  hp: number;
  sp: number;
  totalHp: number;
  status: string;
  soundDie: Howl;
  soundDamage: Howl;

  constructor(input: MonsterInput) {
    this.id = input.id;
    this.name = input.name;
    this.img = input.img;
    this.hp = input.hp;
    this.sp = input.sp;
    this.totalHp = input.totalHp;
    this.status = 'live';
    this.soundDie = input.soundDie;
    this.soundDamage = input.soundDamage;
  }

  handleDamage(damage: number) {
    this.hp = this.hp - damage;
    if (this.hp <= 0) {
      this.status = 'die';
    }
  }

  handleRespawn() {
    this.hp = this.totalHp;
    this.status = 'live';
  }
}
