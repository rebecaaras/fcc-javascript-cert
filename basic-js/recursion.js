let arr = [10, 11, 2, 4, 6, 8, 9];

function sum(arr, n) {
    // Only change code below this line
    console.log(arr[n  - 1]);
    if (n === 0){
      return 0;
    }
    
    return sum(arr, n - 1 ) + arr[n - 1] ;
    // Only change code above this line
  }

console.log(sum(arr, 3));