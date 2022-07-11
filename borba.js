export class Borba {
  constructor(heroj, cudoviste) {
    this.heroj = heroj;
    this.cudoviste = cudoviste;
  }

  Fight() {
    while (true) {
      this.cudoviste.hp_cudovista -= this.heroj.Attack();
      console.log(
        `${this.heroj.tip_heroja}: ${this.heroj.hp_heroja}hp        ${this.cudoviste.tip_cudovista}: ${this.cudoviste.hp_cudovista}hp`
      );
      if (this.cudoviste.hp_cudovista <= 0) {
        console.log(`${this.heroj.tip_heroja} je pobedio!`);
        break;
      }
      this.heroj.hp_heroja -= this.cudoviste.Attack();
      console.log(
        `${this.heroj.tip_heroja}: ${this.heroj.hp_heroja}hp        ${this.cudoviste.tip_cudovista}: ${this.cudoviste.hp_cudovista}hp`
      );
      if (this.heroj.hp_heroja <= 0) {
        console.log(`${this.heroj.tip_heroja} je izgubio!`);
        break;
      }
    }
  }
}
