export class Heroj {
  hp_heroja = 0;
  ranac = [];
  glavnoOruzje = "";
  constructor(tip_heroja) {
    this.tip_heroja = tip_heroja;
  }

  uzmiOruzje(weapon) {
    try {
      //Deo metode koji proverava da si zadati uslovi ispunjeni
      if (this.ranac.length === 2) throw "Ranac je pun!";
      if (this.tip_heroja === "Macevalac" && weapon.tipOruzja === "Carolija")
        throw "Macevalac ne moze da nauci Caroliju!";
      else if (
        this.tip_heroja === "Carobnjak" &&
        (weapon.tipOruzja == "Mac" || weapon.tipOruzja == "Koplje")
      )
        throw "Carobnjak ne moze koristiti " + weapon.tipOruzja + "!";

      this.ranac.push(weapon);
      this.glavnoOruzje = this.ranac[0];
      console.log("\n\nTrenutna oruzja u rancu");
      for (let item of this.ranac) {
        console.log(item.naziv_oruzja);
      }
    } catch (err) {
      console.log(err);
    }
  }

  baciOruzje(index) {
    try {
      if (index > 2 || index < 1) throw "Pogresan unos indexa mesta oruzja!";
      if (this.ranac.length == 0) throw "Ranac je prazan!";
      else if (this.ranac.length == 1) {
        this.ranac = [];
        this.glavnoOruzje = "";
      } else {
        this.ranac.splice(index - 1, 1);
        this.glavnoOruzje = this.ranac[0];
        console.log(this.ranac);
      }
    } catch (err) {
      console.log(err);
    }
  }

  Attack() {
    return this.glavnoOruzje.snaga_oruzja;
  }

  dajOruzje(index) {
    let wpn = this.ranac[index - 1];
    this.ranac.splice(index - 1, 1);
    return wpn;
  }
}

export class Macevalac extends Heroj {
  constructor() {
    super("Macevalac");
    this.hp_heroja = 100;
  }
}

export class Carobnjak extends Heroj {
  constructor() {
    super("Carobnjak");
    this.hp_heroja = 150;
  }
}

// let carobnjak = new Heroj("Macevalac");

// carobnjak.uzmiOruzje();
