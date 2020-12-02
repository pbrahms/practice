/*  
    Ideja problema je napraviti funkcionalnost provere postojanja reci.
    Napraviti funkciju koja prihvata jedan parametar koji predstavlja rec.
    Zadatak je proveriti da li ta rec postoji u recniku koji se nalazi na:

    https://www.scrabble.org.nz/assets/CSW15.txt
    
    Ako rec postoji potrebno je vratiti true, u suprotnom false.
    Ignorisati velicinu karaktera u reci.
*/

/*
fetch('https://www.scrabble.org.nz/assets/CSW15.txt')
  .then(response => response.json())
  .then(data => console.log(data));
*/

//npm i node-fetch --save


/*
fetch(url)
    .then(function (response) {
        response.text().then(function (text) {
            storedString = text;
            storedArray = storedString.split('\r\n');
            //console.log(storedArray);
            console.log(storedArray.length);
            let compare = function(word) {
                /*for (let i=0; i<=storedArray.length; i++) {
                    if (word === storedArray[i]) { 
                        return i; 
                    }
                    else { 
                        return 'This word was not found in the dictionary.';
                    }
                }    
                if (word === storedArray[12]) { 
                    return "Found!"; 
                }
            }
            
            console.log(compare('AARDWOLVES'));
        });
    });
*/
const fetch = require("node-fetch");

let url = 'https://www.scrabble.org.nz/assets/CSW15.txt';
let storedString;
let storedArray = [];

fetch(url).then(function (response) {
    response.text().then(function (text) {
        storedString = text;
        storedArray = storedString.split('\r\n');
        //console.log(storedArray);
        console.log(storedArray.length);
    }).then(function (word){
        for (let i = 0; i <= storedArray.length; i++) {
            if (word === storedArray[i]) {
                return "Found";
            }
            else {
                return 'This word was not found in the dictionary.';
            }
        }
        if (word === storedArray[12]) {
            return "Found!";
        }
    });
});

console.log(compare('AARDWOLVES'));


