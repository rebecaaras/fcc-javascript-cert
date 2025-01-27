class Ant {
  constructor(food) {
    this.food = food;
  }

  eats() {
    console.log(`Ants eat ${this.food}!`);
  }
}

tanajura = new Ant("grass");
tanajura.eats();