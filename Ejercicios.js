const checkIs100 = (a, b) => {
    if (a === 100 || b === 100 || a + b === 100){
        return true;
    } else {
        return false;
    }
}

// solucion chingona

const checkIf100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

// Write a JavaScript program to get the extension of a filename.

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

// write a function to replace every character in a given string with the character following it in the alphabet.

const moveCharsForward = (str) =>
    str
    .split("")
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

    // Write a JavaScript program to get the current date. the index of the date is always 0 so we have to add 1 to get the right one.
const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
// Write a Javascript program to create a new string adding "new!" in forn of a given string. If the given string begins with New already then return
// the original string

const addNew = (str) => {
    if (str.lastIndexOf("New!") === 0){
        return `${str}`;
    } else{
        return `New ${str}`;
    }
}

const addNew = (str) => str.lastIndexOf("New!") ===0 ? `${str}` : `New! ${str}`;


// Write a Javascript program to reate a new string from a given string taking the first 3 charaters and the last 3 characters of a string and adding them together.
// the string length must be 3 or more, if not, the original string is returned. 

const newString = (str) => {
    if (str.length < 3){
        return str;
    } else {
        return str.slice(0, 3) + str.slice(-3);
    }
}
// solucion pro.
const newString2 = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice (-3);

// Write a JavaScript program to extract the first half of a string of even length.

const extractHalf = (str) => str.slice(0, str.length / 2);

// Write a Javascript promgram to concatenate two strings except their first character.

const concatNew =(str1, str2) => str1.slice(1) + str2.slice(1);

// Write a Javascript program to find out chich one of two values is neares to 100.
// Esta solucion no funciona si los numeros son superiores a  100
const under100 = (a, b) => (100 - a) < (100 - b) ? a : b ;
const over100 = (a, b) => (100 - a) > (100 - b) ? a : b ;

const closerTo100 = (a, b) => a || b < 100 ? under100(a, b) : over100(a, b);

// Write a Javascript program to find the number of even digits in an array of integers.

const evenCounter = (array) => array.filter(num => num % 2 === 0).length;

const largestEven = (arr) => Math.max(...arr.filter(num => num % 2 === 0));

const replaceFirstDigit = (str) => str.length < 1 ? console.log("Not Valid"): `$` + str.slice(1);

const replaceDigits = (str) => str.replace(/[0-9]/, `$`);



