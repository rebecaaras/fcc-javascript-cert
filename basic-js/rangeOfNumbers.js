function rangeOfNumbers(startNumber, endNumber){
    if (endNumber < startNumber){
        return [];
    }

    let range = rangeOfNumbers(startNumber, endNumber-1);
    range.push(endNumber);
    return range;
}

console.log(rangeOfNumbers(2, 10));