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






