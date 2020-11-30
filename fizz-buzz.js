/*
Write a program that prints the numbers from 1 to 100.
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
For numbers which are multiples of both three and five print “FizzBuzz“ 
*/

let fizzBuzz = function() {
    let arr = [];
    for (let i=1; i<=100; i++) {
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

console.log(fizzBuzz());