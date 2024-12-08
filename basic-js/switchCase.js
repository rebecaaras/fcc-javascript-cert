function caseInSwitch(val){
    let answer = "";
    switch (val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        }
    if (answer === ""){
        throw Error("Enter an integer between 1 and 4 inclusive");
    }
    
    return answer;
}

console.log(caseInSwitch(1));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4));
console.log(caseInSwitch(2));
console.log(caseInSwitch(5));