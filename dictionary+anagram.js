/*  
    Ideja problema je napraviti funkcionalnost provere postojanja reci.
    Napraviti funkciju koja prihvata jedan parametar koji predstavlja rec.
    Zadatak je proveriti da li ta rec postoji u recniku koji se nalazi na:

    https://www.scrabble.org.nz/assets/CSW15.txt
    
    Ako rec postoji potrebno je vratiti true, u suprotnom false.
    Ignorisati velicinu karaktera u reci.
*/

const axios = require('axios');

let url = 'https://www.scrabble.org.nz/assets/CSW15.txt',
    storedString,
    storedArray = [];

getText = async () => {
    const { data } = await axios.get(url);
    return data;
}

let splitFunc = async () => {
    storedString = await getText();
    storedArray = storedString.split(/[\r\n]+/);
    return storedArray;
}

let compare = async (word) => {
    let compArray = await splitFunc();
    let check = false;
    let index;
    word = word.toUpperCase();
    for (let i = 0; i <= compArray.length; i++) {
        if (word === compArray[i]) {
            check = true;
            index = i;
        }
    }
    if (check === true) {
        //console.log(word + ' is in the dictionary, at index number ' + index + '.');
        return true;
    }
    else {
        //console.log(word + ' is not in the dictionary.');
        return false;
    }
}

//compare('Aardvark');


/*
    Provera da li se svi karakteri reci1 nalaze u reci2
    jednom iskoriscen karakter ne moze se ponovo upotrebiti
*/


let compareAn = async (word1, word2) => {
    word1 = word1.toUpperCase();
    word2 = word2.toUpperCase();
    if (await compare(word1) === true){
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