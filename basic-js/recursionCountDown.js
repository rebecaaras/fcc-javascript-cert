function countdown(n) {
    if (n <= 0) {
        return []
    } else {
        let countArray = countdown(n-1);
        countArray.unshift(n);
        return countArray;
    }    
}

console.log(countdown(10));