// Only change code below this line
class Thermostat {
    constructor(temperature) {
      this._temperature = 5*(temperature - 32)/9;
    }
  
    //getter
    get temperature() {
      return this._temperature;
    }
  
    set temperature(newTemp) {
      this._temperature = newTemp;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius
  