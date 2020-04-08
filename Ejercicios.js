const checkIs100 = (a, b) => {
    if (a === 100 || b === 100 || a + b === 100){
        return true;
    } else {
        return false;
    }
}

// solucion chingona

const checkIf100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;