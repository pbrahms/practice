/*
    Write a program that prints the numbers from 1 to 100.
    But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
    For numbers which are multiples of both three and five print “FizzBuzz“ 
*/

//optimized solution 1

let fizzBuzz4 = function () {
    arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) { arr.push("FizzBuzz"); }
        else if (i % 3 == 0) { arr.push("Fizz"); }
        else if (i % 5 == 0) { arr.push("Buzz"); }
        else { arr.push(i); }
    }
    return arr;
}
console.log(fizzBuzz4());


//optimized solution 2

let fizzBuzz5 = function () {
    //console.log("Fizz Buzz solution 5");
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) { console.log("FizzBuzz"); }
        else if (i % 3 == 0) { console.log("Fizz"); }
        else if (i % 5 == 0) { console.log("Buzz"); }
        else { console.log(i); }
    }
}
fizzBuzz5();

//other solution 1

let fizzBuzz1 = function () {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                arr.push('FizzBuzz');
            }
            else {
                arr.push('Fizz');
            }
        }
        else if (i % 5 === 0) {
            arr.push('Buzz');
        }
        else {
            arr.push(i);
        }
    }
    return arr;
}
console.log(fizzBuzz1());


//other solution 2

let fizzBuzz2 = function () {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        let j = '';
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0) {
                j = 'Fizz';
            }
            if (i % 5 === 0) {
                j = j + 'Buzz';
            }
        }
        else {
            j = i;
        }
        arr.push(j);
    }
    return arr;
}
console.log(fizzBuzz2());


//other solution 3

let fizzBuzz3 = function () {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        let j = '';
        if (i % 3 === 0) {
            j = 'Fizz';
        }
        if (i % 5 === 0) {
            j = j + 'Buzz';
        }
        if (j === '') {
            arr.push(i);
        }
        else {
            arr.push(j);
        }
    }
    return arr;
}
console.log(fizzBuzz3());