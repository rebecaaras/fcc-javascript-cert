const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(total);
  return total;
};

sum(1, 2, 4)
sum(1, 3, 5, 7, 9)
sum(1, 3, 5, 7, 9, 11, 13)
sum(1, 3, 5, 7, 9, 11, 13, 15, 17)
sum(1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21)
