# numeral library
## usage
### convert betwen any numeral system and decimal
---
## from decimal functions
### 1. toBinary
```js
deciaml => binary  
```

```ts
toBinary(decimal: number = 0): string | false
```
```ts
// valid input: numbers only
return (is num valid)?string:false
```


### 2. toOctal
```js
deciaml => octal  
```

```ts
toOctal(decimal: number = 0): string | false
```
```ts
// valid input: numbers only
return (is base ,num and nums is valid)?string:false
```

### 3. toHex
```js
deciaml => hexadecimal  
```

```ts
toHex(decimal: number = 0): string | false
```
```ts
// valid input: numbers only
return (is num valid)?string:false
// return hex in uppercase 
```
### 4. toBase
```js
deciaml => (any numeral sysetm)
```

```ts
toBase(decimal:number,base:number,nums?:string[]):string|false
```
```ts
/*
  valid decimal: numbers only
  valid base: numbers only
  valid nums: 
    1. array of strings or numbers 
    2. its length bigger than base
    2. every element in the nums,his length is 1 
*/

return (is num valid)?string:false
```
### examples

```js
toBinary(4)               //valid => 100
toOctal(9)                //valid => 11
toHex(255)                //valid => FF
toBase(4,4)               //valid => 10
toBase(7,4)               //valid => 13
toBase(2,2,["O","I"])     //valid => IO
toBinary("4")             //invalid => false
toOctal("55")             //invalid => false
toHex("10")               //invalid => false
toBase(2,3,["O","I"])     //invalid => false
toBase(2,9,["O","I"])     //invalid => false
```
---
## to decimal fuctions
### 1. fromBinary
```js
binary => decimal
```
```ts
fromBinary(binary: string = "0"): number | false
```
```js
// valid binary: srting contains only 1,0
return (is binary valid)?number:false
```

### 2. fromOctal
```js
octal => decimal
```
```ts
fromOctal(octal: string = "0"): number | false
```
```js
// valid octal: srting contains only (form[0 -> 8])
return (is octal valid)?number:false
```

### 3. fromHex
```js
hexadecimal => decimal
```
```ts
fromHex(hex: string = "0"): number | false
```
```js
// valid hex: srting contains only (from[1 -> 9][A -> F][a -> f])
return (is hex valid)?number:false
```
### 4. fromBase
```
(any numeral system) => decimal
```
```ts
fromBase(num:string="0",base:number=10,nums?:string[]): number | false
```
```js
/* 
  valid num: 
    1. string only
    2. contains only from 0 to base if there is no nums
    3. contains only nums digits from index 0 to base if there is nums
  valid base:
    1. any number
  valid nums:
    1. array of strings 
    2. its length bigger than base
    2. every element in the nums,his length is 1
*/
return (is hex valid)?number:false
```

### examples
```js
fromBinay("101")                //valid => 5
fromOctal("11")                 //valid => 9
fromHex("FA")                   //valid => 250
fromBase("IO",2,["I","O"])      //valid => 2
fromBase("IOI",2,["I","O"])     //valid => 5
fromBinay("131")                //invalid => false
fromOctal("118")                //invalid => false
fromHex("FAO")                  //invalid => false
fromBase("IO",3,["I","O"])      //invalid => false
fromBase("IOIP",2,["I","O"])    //invalid => false
```
