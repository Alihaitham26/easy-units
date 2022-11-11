"use strict";
/* this module will use to convert between numeral system: [binary,octal,decimal,hexadecimal] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.toOctal = exports.toBinary = void 0;
function toBinary(decimal = 0) {
    //some unusual suits
    if (typeof decimal !== "number")
        return false;
    if (decimal < 1)
        return "0";
    //make the number int
    decimal = decimal - (decimal % 1);
    let binary = "";
    for (let i = decimal; i > 0; i = (i - (i % 2)) / 2) {
        binary = (i % 2) + binary;
    }
    return binary;
}
exports.toBinary = toBinary;
function toOctal(decimal) {
    return "0";
}
exports.toOctal = toOctal;
