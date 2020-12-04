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
    let num0 = 0,
        num1 = 1,
        num2;
    if (index === 0) {
        return num0;
    }
    else if (index === 1) {
        return num1;
    }
    else {
        for (let i = 2; i <= index; i++) {
            num2 = fibonacci(index - 1) + fibonacci(index - 2);
        }
        return num2;
    }
}
console.log(fibonacci(8));