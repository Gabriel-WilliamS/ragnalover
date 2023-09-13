import { Monster } from './Monster';

interface CharacterInput {
  hit: number;
  aspd?: number;
}

interface IStatusPoint {
  STR: number;
  AGI: number;
  VIT: number;
  INT: number;
  DEX: number;
  LUK: number;
}

export class Character {
  id: number;
  name: string;
  img: string;
  hp: number;
  sp: number;
  atk: number;
  def: number;
  hit: number;
  flee: number;
  critical: number;
  aspd: number;
  maxHp: number;
  maxSp: number;
  hpRegen: number;
  spRegen: number;
  statusPoint: IStatusPoint;
  status: string;
  soundDie: Howl;
  soundDamage: Howl;
  soundAttack: Howl;
  baseLv: number;
  jobLv: number;
  baseExp: number;
  jobExp: number;
  job: string;

  private attackCooldown: number = 0;

  constructor(input: CharacterInput) {
    this.id = 1;
    this.name = 'Vinha';
    this.img = '/img/characters/noviceMan.png';
    this.hp = 50;
    this.sp = 50;
    this.atk = 0;
    this.def = 0;
    this.hit = input.hit;
    this.flee = 0;
    this.critical = 0;
    this.aspd = input.aspd ? input.aspd : 10;
    this.maxHp = 50;
    this.maxSp = 50;
    this.hpRegen = 0;
    this.spRegen = 0;
    this.statusPoint = {
      STR: 0,
      AGI: 0,
      VIT: 0,
      INT: 0,
      DEX: 0,
      LUK: 0,
    };
    this.status = 'live';
    this.soundDie = new Howl({
      src: ['/sounds/monsters/poringDamage.mp3'],
      volume: 0.2,
      preload: true,
    });
    this.soundDamage = new Howl({
      src: ['/sounds/monsters/poringDie.mp3'],
      volume: 0.2,
      preload: true,
    });
    this.soundAttack = new Howl({
      src: ['/sounds/hits/hand1.mp3'],
      volume: 0.2,
      preload: true,
    });
    this.baseLv = 1;
    this.jobLv = 1;
    this.baseExp = 0;
    this.jobExp = 0;
    this.job = 'Novice';
  }

  calculateCooldown(aspd: number) {
    aspd = Math.max(1, Math.min(99, aspd));

    this.attackCooldown = 500 - (aspd - 1) * 4;
  }

  handleAttack(monster: Monster, setHistoryDamage: React.Dispatch<React.SetStateAction<number[]>>) {
    if (this.attackCooldown > 0) {
      return 0;
    }

    this.soundAttack.play();
    monster.soundDamage.play();

    const damage = this.hit;
    this.calculateCooldown(this.aspd);

    setTimeout(() => {
      this.attackCooldown = 0;
    }, this.attackCooldown);
    setHistoryDamage(oldDamage => [...oldDamage, damage]);
    monster.handleDamage(damage);
  }
}
