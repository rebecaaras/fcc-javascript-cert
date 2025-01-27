const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line

const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;

/////////////////////
let a = 8,
  b = 6;
// Only change code below this line
[a, b] = [b, a];
console.log(a, b);

///////////////////////
const removeFirstTwo = (list) => {
  const [a, b, ...arr] = list;
  return (list = arr);
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(removeFirstTwo(source));
