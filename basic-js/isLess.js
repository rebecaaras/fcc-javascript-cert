// Sometimes people use an if/else statement to do a comparison, like this:

// function isEqual(a, b) {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// }
// But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

// function isEqual(a, b) {
//   return a === b;
// }

function isLess(a, b){
    return a < b;
}

console.log(isLess(1, 2));
console.log(isLess("10", "5"));//this is like alphabetical comparisson
console.log(isLess(10, 5));