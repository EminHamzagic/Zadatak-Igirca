import { Heroj } from "./heroj.js";

export class Oruzje {
  snaga_oruzja = 0;
  naziv_oruzja = "";
  constructor(tip_oruzja, naziv_oruzja) {
    this.tip_oruzja = tip_oruzja;
    this.naziv_oruzja = naziv_oruzja;
  }
  get tipOruzja() {
    return this.tip_oruzja;
  }
}

export class Mac extends Oruzje {
  constructor(naziv_oruzja) {
    super("Mac", naziv_oruzja);
    this.snaga_oruzja = 10;
  }
}

export class Koplje extends Oruzje {
  constructor(naziv_oruzja) {
    super("Koplje", naziv_oruzja);
    this.snaga_oruzja = 15;
  }
}

export class Carolija extends Oruzje {
  constructor(naziv_oruzja) {
    super("Carolija", naziv_oruzja);
    this.snaga_oruzja = 20;
  }
}
