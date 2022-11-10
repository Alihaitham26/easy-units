"use strict";
/* this module will use to convert between numeral system: [binary,octal,decimal,hexadecimal] */
function toBinary(decimal = 0) {
    if (typeof decimal !== "number") {
        return false;
    }
    decimal = decimal - (decimal % 1);
    let binaryArray = [];
    if (decimal <= 0) {
        return "0";
    }
    while (decimal > 0) {
        binaryArray.push(decimal % 2);
        decimal = (decimal - (decimal % 2)) / 2;
    }
    console.log(binaryArray);
    return binaryArray.reverse().join("");
}
module.exports = { toBinary };
