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
        console.log(word + ' is in the dictionary, at index number ' + index + '.');
        return true;
    }
    else {
        console.log(word + ' is not in the dictionary.');
        return false;
    }
}

compare('Aardvark');