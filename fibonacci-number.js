//solution 1
/*
let fibonacci = function (index) {
    let num1 = 0,
        num2 = 1,
        num3 = 0;
    if (index === 0) {
        return 0;
    }
    else if (index === 1) {
        return 1;
    }
    else {
        for (let i = 2; i <= index; i++) {
            num3 = num2 + num1;
            num1 = num2;
            num2 = num3;
        }
        return num3;
    }
}
console.log(fibonacci(8));
*/

//solution 2 - recursive function

let fibonacci = function (index) {
    let num;
    if (index === 0 || index === 1) {
        return index;
    }
    else {
        return num = fibonacci(index - 1) + fibonacci(index - 2);
    }
}
console.log(fibonacci(15));