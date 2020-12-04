//checks lower case

let isLowerCase = function(char) {
    if (char == char.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}


//encrypt

let caesarEncrypt = function(word, key) {
    let origAr = word.split('');
    let crypAr = [];
    key = key % 26;
    
    for(let i=0; i<word.length; i++) {
        let n = origAr[i].toUpperCase().charCodeAt(0) + key;
        if(n > 90) {
            let p = n - 90;
            crypAr.push(String.fromCharCode(64 + p));
        }
        else if (n < 65) {
            let p = 65 - n;
            crypAr.push(String.fromCharCode(91 - p));
        }
        else {
            crypAr.push(String.fromCharCode(n));
        }
    }
    for(let i=0; i<word.length; i++){
        if(isLowerCase(origAr[i])) {
            crypAr[i] = crypAr[i].toLowerCase();
        }
    }
    let crypSt = crypAr.join('');
    return crypSt;
}


//decrypt

let caesarDecrypt = function(word, key) {
    let origAr = word.split('');
    let crypAr = [];
    key = key % 25;
    key = key * -1;

    for(let i=0; i<word.length; i++) {
        let n = origAr[i].toUpperCase().charCodeAt(0) + key;
        if(n > 90) {
            let p = n - 90;
            crypAr.push(String.fromCharCode(64 + p));
        }
        else if (n < 65) {
            let p = 65 - n;
            crypAr.push(String.fromCharCode(91 - p));
        }
        else {
            crypAr.push(String.fromCharCode(n));
        }
    }
    for(let i=0; i<word.length; i++){
        if(isLowerCase(origAr[i])) {
            crypAr[i] = crypAr[i].toLowerCase();
        }
    }
    let crypSt = crypAr.join('');
    return crypSt;
}

let x = caesarEncrypt('FILip', 26);
let y = caesarDecrypt('Gjmjq', 1);
console.log(x);
console.log(y);


///another example

var caesarShift = function (str, amount) {
    // Wrap the amount
    if (amount < 0) {
        return caesarShift(str, amount + 26);
    }

    // Make an output variable
    var output = "";

    // Go through each character
    for (var i = 0; i < str.length; i++) {
        // Get the character we'll be appending
        var c = str[i];

        // If it's a letter...
        if (c.match(/[a-z]/i)) {
            // Get its code
            var code = str.charCodeAt(i);

            // Uppercase letters
            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            }

            // Lowercase letters
            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
            }
        }

        // Append
        output += c;
    }

    // All done!
    return output;
};