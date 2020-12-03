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

const fetch = require("node-fetch");

let url = 'https://www.scrabble.org.nz/assets/CSW15.txt';
let storedString;
let storedArray = [];

fetch(url)
    .then(function (response) {
        response.text().then(function (text) {
            storedString = text;
            done();
        });
    });

function done() {
    storedArray = storedString.split('\r\n');
    //console.log(storedArray);
}
//word
let compare = function(word) {
    for (let i=0; i<=storedArray.length; i++) {
        if (word == storedArray[i]) { 
            return i; 
        }
        else { 
            return 'This word was not found in the dictionary.';
        }
    }    
}

console.log(compare("'AARDVARK'"));




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

            if (word === storedArray[12]) {
            return "Found!";
        }
*/

//npm i node-fetch --save

const fetch = require("node-fetch");

let url = 'https://www.scrabble.org.nz/assets/CSW15.txt';
let storedString;
let storedArray = [];

let compare = function (word, storedArray) {
    for (let i = 0; i <= storedArray.length; i++) {
        if (word === storedArray[i]) {
            return "Found";
        }
        else {
            return 'This word was not found in the dictionary.';
        }
    }
    console.log("Duzina niza je: " + storedArray.length);
}

fetch(url).then(function (response) {
    response.text().then(function (text) {
        storedString = text;
        storedArray = storedString.split('\r\n');
        console.log(storedArray.length);
        return storedArray;
    });
});

console.log(compare('AARDWOLVES', storedArray));






/*
function getString() {
    return axios.get(url)
}

let convert = async function () {
    storedString = await getString()    
    //console.log(compare('AARDWOLVES', storedArray))
    //return storedString
}

//const convert = await Promise.all(covert) (

//storedArray = await convert().split('\r\n')


//let compare = async function () {}
//splitter();
convert();
*/
/*

axios.get(url).then(response => {
    console.log("i should go first");
    storedString = response;
}).catch(({response}) => {
    console.log(response);
}).finally(() => {
    console.log(storedString);
    storedArray = storedString.split('\r\n');    
    //console.log(compare('AARDWOLVES', storedArray));
});


console.log(storedArray.length);


const axios = require('axios');
async function makeGetRequest() {
  let res = await axios.get('http://webcode.me');
  let data = res.data;
  console.log(data);
}
makeGetRequest();
*/


//var split = string.split(/\n/);
//val.split(/[\r\n]+/)




///XML XML XML

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

            if (word === storedArray[12]) {
            return "Found!";
        }
*/

//npm i node-fetch --save

/*
function reqListener() {
    var data = JSON.parse(this.responseText);
    console.log(data);
  }
  
  function reqError(err) {
    console.log('Fetch Error :-S', err);
  }
  
  var oReq = new XMLHttpRequest();
  oReq.onload = reqListener;
  oReq.onerror = reqError;
  oReq.open('get', 'https://www.scrabble.org.nz/assets/CSW15.txt', true);
  oReq.send();



  let compare = function (word) {
    for (let i = 0; i <= storedArray.length; i++) {
        if (word === storedArray[i]) {
            return "Found";
        }
        else {
            return 'This word was not found in the dictionary.';
        }
    }
    console.log("Duzina niza je: " + storedArray.length);
}

*/

const fetch = require("node-fetch");

let url = 'https://www.scrabble.org.nz/assets/CSW15.txt';
let storedString;
let storedArray = [];

let compare = function (word, storedArray) {
    for (let i = 0; i <= storedArray.length; i++) {
        if (word === storedArray[i]) {
            return "Found";
        }
        else {
            return 'This word was not found in the dictionary.';
        }
    }
    console.log("Duzina niza je: " + storedArray.length);
}

fetch(url).then(function (response) {
    response.text().then(function (text) {
        storedString = text;
        storedArray = storedString.split('\r\n');
        console.log(storedArray.length);
        console.log(compare('AARDWOLVES', storedArray));
    });
});


///AXIOS AXIOS AXIOS

const axios = require('axios');

// Make a request 
/*
axios.get()
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
    
  });

  */
/*
 ;(async () => {
  const response = await axios.get('https://www.scrabble.org.nz/assets/CSW15.txt')
  console.log(response)
})()

*/

function getDict() {
  return axios.get('https://www.scrabble.org.nz/assets/CSW15.txt')
}

let compare = async function () {
  let dictionary = await getDict()
  console.log(dictionary)
  return dictionary;
}

compare();





