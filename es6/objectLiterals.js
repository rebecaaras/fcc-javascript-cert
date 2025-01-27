const createEntity = (name, age, gender) => ({ name, age, gender });
console.log(createEntity("Zodiac Hasbro", 56, "male"));

////////////////////////
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
