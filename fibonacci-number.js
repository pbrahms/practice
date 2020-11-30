let fibonacci = function (num) {
    let i;
    for (i=0; i<num; i++) {
        i = i + i;
    }
    return i;
}
console.log(fibonacci(3));