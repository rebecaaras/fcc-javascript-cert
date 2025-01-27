const sumGrades = (...grades) => {
  let sum = 0;
  for (let grade of grades) {
    sum += grade;
  }
  return sum;
};

console.log(sumGrades(9, 6, 4, 8));
////////////////////////////////////////////////////
