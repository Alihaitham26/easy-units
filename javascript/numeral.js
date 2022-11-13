"use strict";
/* this module will use to convert between numeral system: [binary,octal,decimal,hexadecimal] */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase = exports.fromHex = exports.fromOctal = exports.fromBinary = exports.toHex = exports.toOctal = exports.toBinary = exports.hexNums = void 0;
const hexNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
exports.hexNums = hexNums;
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
function fromHex(hex = "0") {
    if (typeof hex !== "string" || !(/^[0-9|a-f|A-F]+$/.test(hex)))
        return false;
    //make it upper case to make it can convert hex with the lower case letters(a|A,f|F)
    let formatedHex = hex.toUpperCase();
    //convert into decimal
    let decimal = 0;
    for (let i = formatedHex.length - 1; i >= 0; i--) {
        decimal += hexNums.indexOf(formatedHex[i].toUpperCase()) * (16 ** (formatedHex.length - i - 1));
    }
    return decimal;
}
exports.fromHex = fromHex;
function fromBase(num = "0", base = 10, nums) {
    if (typeof num !== "string")
        return false;
    if (nums && nums.length >= base && nums.join("").length === nums.length) {
        //if nums is valid
        //formatting nums if it is taller than the base
        if (nums.length > base)
            nums = nums.slice(0, base + 1);
        let regex = new RegExp(`^[${nums.join("")}]+$`);
        if (regex.test(num)) {
            //number is valid
            let decimal = 0;
            for (let i = num.length - 1; i >= 0; i--)
                decimal += nums.indexOf(num[i]) * (base ** (num.length - i - 1));
            return decimal;
        }
        else {
            //number is invalid
            return false;
        }
    }
    else {
        //if nums is invalid
        if (base < 10) {
            let regex = new RegExp(`^[0-${base - 1}]+$`);
            if (!regex.test(num))
                return false;
            let decimal = 0;
            for (let i = num.length - 1; i >= 0; i--) {
                decimal += (+num[i]) * (base ** (num.length - i - 1));
            }
            return decimal;
        }
        else if (base === 10 && ((/^[0-9]+$/).test(num))) {
            return num;
        }
        else {
            //if num is taller than 10 or his its tall is 10 but not valid as decimal
            return false;
        }
    }
}
exports.fromBase = fromBase;
