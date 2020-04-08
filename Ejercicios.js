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

const moveChharsForward = (str) =>
    str
    .spli("")
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");
