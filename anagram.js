/*
    Provera da li se svi karakteri reci1 nalaze u reci2
    jednom iskoriscen karakter ne moze se ponovo upotrebiti
*/


let compareAn = function (word1, word2) {
    word1 = word1.toUpperCase();
    word2 = word2.toUpperCase();
    let word1Arr = word1.split(''),
        word2Arr = word2.split(''),
        checker = 0;
    for (let i = 0; i < word1.length; i++) {
        for (let j = 0; j < word2.length; j++) {
            if (word1Arr[i] === word2Arr[j]) {
                word2Arr.splice(j, 1);
                checker++;
                break;
            }
        }
    }
    if (checker === word1.length) {
        console.log(word1 + ' is an acceptable submission.')
        return true;
    }
    else {
        console.log(word1 + ' is not an acceptable submission.')
        return false;
    }
}

compareAn('no', 'areallylongword');
compareAn('grow', 'areallylongword');
compareAn('bold', 'areallylongword');
compareAn('glly', 'areallylongword');
compareAn('woolly', 'areallylongword');
compareAn('adder', 'areallylongword');