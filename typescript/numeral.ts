/* this module will use to convert between numeral system: [binary,octal,decimal,hexadecimal] */
const hexNums=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

function toBinary(decimal:number=0):string|boolean{
  //some unusual inputs
  if(typeof decimal !== "number") return false
  if(decimal<1) return "0"

  //make the number int
  decimal=decimal-(decimal%1)
  
  //convert into binary
  let binary=""
  for(let i=decimal;i>0;i=(i-(i%2))/2){
    binary=(i%2)+binary
  }
  return binary
}

function toOctal(decimal:number=0):string|boolean{
  //some unusual inputs
  if(typeof decimal !== "number") return false
  if(decimal<1) return "0"

  //make the number int
  decimal=decimal-(decimal%1)
  
  //convert into octal
  let octal=""
  for(let i=decimal;i>0;i=(i-(i%8))/8){
    octal=(i%8)+octal
  }
  return octal
}
function toHex(decimal:number=0):string|boolean{
  //some unusual inputs
  if(typeof decimal !== "number") return false
  if(decimal<1) return "0"

  //make the number int
  decimal=decimal-(decimal%1)

  //convert into hex
  let hex=""
  for(let i=decimal;i>0;i=(i-(i%16))/16){
    hex=hexNums[(i%16)]+hex
  }
  return hex
}


export {toBinary,toOctal,toHex}