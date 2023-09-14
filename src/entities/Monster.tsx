interface MonsterInput {
  id: number;
  name: string;
  img: string;
  hp: number;
  sp: number;
  totalHp: number;
  soundDie: Howl;
  soundDamage: Howl;
  exp: number;
  position: { x: number; y: number };
}
export type Status = 'attack' | 'alert' | 'idle' | 'die' | 'live';

export class Monster {
  private attackCooldown: number = 0;

  id: number;
  name: string;
  img: string;
  hp: number;
  sp: number;
  totalHp: number;
  status: Status;
  soundDie: Howl;
  soundDamage: Howl;
  aspd: number;
  exp: number;
  position: { x: number; y: number };

  constructor(input: MonsterInput) {
    this.id = input.id;
    this.name = input.name;
    this.img = input.img;
    this.hp = input.hp;
    this.sp = input.sp;
    this.totalHp = input.totalHp;
    this.status = 'live';
    this.aspd = 1000;
    this.soundDie = input.soundDie;
    this.soundDamage = input.soundDamage;
    this.position = input.position;
    this.exp = input.exp;
  }

  handleDamage(damage: number, setHistoryDamage: React.Dispatch<React.SetStateAction<number[]>>) {
    this.hp = this.hp - damage;
    this.status = 'alert';
  }

  handleDie() {
    this.status = 'die';
    this.soundDie.play();
  }

  handleRespawn() {
    this.status = 'live';
    this.hp = this.totalHp;
  }

  handleVerifyDie() {
    if (this.hp <= 0) {
      this.handleDie();
      return true;
    } else {
      return false;
    }
  }

  // handleAttack(setMonsterStatus: React.Dispatch<React.SetStateAction<number[]>>) {
  //   if (this.attackCooldown > 0) {
  //     return; // O monstro ainda está em cooldown de ataque.
  //   }

  //   // Aqui você pode adicionar lógica para calcular o dano do monstro e atacar o personagem.
  //   const damage = this.calculateDamage(); // Implemente a lógica para calcular o dano.

  //   // Aplique o dano ao personagem.
  //   // character.handleDamage(damage);
  //   this.animationStatus = 'attack';
  //   // Chame a função para calcular o tempo de cooldown de ataque.
  //   this.calculateAttackCooldown();

  //   setTimeout(() => {
  //     this.animationStatus = 'alert';
  //   }, 4000);
  // }

  // private calculateDamage() {
  //   // Implemente a lógica para calcular o dano do monstro.
  //   // Isso pode depender dos atributos do monstro, do personagem, etc.
  //   return 10; // Valor de dano de exemplo.
  // }

  // private calculateAttackCooldown() {
  //   // Calcule o tempo de cooldown de ataque do monstro.
  //   // Por exemplo, você pode definir um valor fixo de 2 segundos (2000 milissegundos).
  //   const cooldownTime = 2000;

  //   // Defina o tempo de cooldown.
  //   this.attackCooldown = cooldownTime;

  //   // Use setTimeout para limpar o cooldown depois do tempo de ataque.
  //   setTimeout(() => {
  //     this.attackCooldown = 0; // O monstro está pronto para atacar novamente.
  //   }, cooldownTime);
  // }
}
