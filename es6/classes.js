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

///////////////////
// Only change code below this line
class Vegetable {
  constructor(name){
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'