"use strict";
/* this module will use to convert between numeral system: [binary,octal,decimal,hexadecimal] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromOctal = exports.fromBinary = exports.toHex = exports.toOctal = exports.toBinary = void 0;
const hexNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
/* convert from decimal functions */
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
/* convert to decimal function */
function fromBinary(binary = "0") {
    // test if input is valid if not return false
    if (typeof binary !== "string" || !(/^[0,1]+$/.test(binary)))
        return false;
    //convert into decimal
    let decimal = 0;
    for (let i = binary.length - 1; i >= 0; i--) {
        decimal += (+binary[i]) * (2 ** (binary.length - i - 1));
    }
    return decimal;
    // Another approach but I will not use it because it loop in the array 2 times
    // return binary.split("").map(e => +e).reduceRight((pre, cur, i) => pre + ((+cur) * (2 ** (binary.length - i - 1))))
}
exports.fromBinary = fromBinary;
function fromOctal(octal = "0") {
    // test if input is valid if not return false
    if (typeof octal !== "string" || !(/^[0-7]+$/.test(octal)))
        return false;
    //convert into decimal
    let decimal = 0;
    for (let i = octal.length - 1; i >= 0; i--) {
        decimal += (+octal[i]) * (8 ** (octal.length - i - 1));
    }
    return decimal;
}
exports.fromOctal = fromOctal;
