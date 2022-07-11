class Cudoviste {
  atk1_snaga = 0;
  atk2_snaga = 0;
  hp_cudovista = 0;
  constructor(tip_cudovista, naziv_cudovista) {
    this.tip_cudovista = tip_cudovista;
    this.naziv_cudovista = naziv_cudovista;
  }
  Attack() {
    switch (Math.floor(Math.random() * 2)) {
      case 0:
        return this.atk1_snaga;
      case 1:
        return this.atk2_snaga;
    }
  }
}

export class Zmaj extends Cudoviste {
  constructor(naziv_cudovista) {
    super("Zmaj", naziv_cudovista);
    this.atk1_snaga = 5;
    this.atk2_snaga = 20;
    this.hp_cudovista = 120;
  }
}

export class Pauk extends Cudoviste {
  constructor(naziv_cudovista) {
    super("Pauk", naziv_cudovista);
    this.atk1_snaga = 5;
    this.atk2_snaga = 8;
    this.hp_cudovista = 200;
  }
}
