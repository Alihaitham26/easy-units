"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = exports.toOctal = exports.toBinary = void 0;
/* this module will use to convert between numeral system: [binary,octal,decimal,hexadecimal] */
const hexNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
function toBinary(decimal = 0) {
    //some unusual inputs
    if (typeof decimal !== "number")
        return false;
    if (decimal < 1)
        return "0";
    //make the number int
    decimal = decimal - (decimal % 1);
    //convert into binary
    let binary = "";
    for (let i = decimal; i > 0; i = (i - (i % 2)) / 2) {
        binary = (i % 2) + binary;
    }
    return binary;
}
exports.toBinary = toBinary;
function toOctal(decimal = 0) {
    //some unusual inputs
    if (typeof decimal !== "number")
        return false;
    if (decimal < 1)
        return "0";
    //make the number int
    decimal = decimal - (decimal % 1);
    //convert into octal
    let octal = "";
    for (let i = decimal; i > 0; i = (i - (i % 8)) / 8) {
        octal = (i % 8) + octal;
    }
    return octal;
}
exports.toOctal = toOctal;
function toHex(decimal = 0) {
    //some unusual inputs
    if (typeof decimal !== "number")
        return false;
    if (decimal < 1)
        return "0";
    //make the number int
    decimal = decimal - (decimal % 1);
    //convert into hex
    let hex = "";
    for (let i = decimal; i > 0; i = (i - (i % 16)) / 16) {
        hex = hexNums[(i % 16)] + hex;
    }
    return hex;
}
exports.toHex = toHex;
