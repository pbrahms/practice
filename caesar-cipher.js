let isLowerCase = function(char) {
    if (char == char.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}

let caesar = function(word, key) {
    let origAr = word.split('');
    let crypAr = [];
    key = key % 25;
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

let x = caesar('XZYabcDE', 1);
console.log(x);