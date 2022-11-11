/* this module will use to convert between numeral system: [binary,octal,decimal,hexadecimal] */

function toBinary(decimal:number=0):string|boolean{
  //some unusual suits
  if(typeof decimal !== "number") return false
  if(decimal<1) return "0"

  //make the number int
  decimal=decimal-(decimal%1)
  
  let binary=""
  for(let i=decimal;i>0;i=(i-(i%2))/2){
    binary=(i%2)+binary
  }
  return binary
}

function toOctal(decimal:number):string|boolean{
  return "0"
}

export {toBinary,toOctal}