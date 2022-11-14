type timeUnits="ms"|"s"|"m"|"h"|"d"|"y"|"MS"|"S"|"M"|"H"|"D"|"Y"
const time={
  timeUnits:["ms","s","m","h","d","y","MS","S","M","H","D","Y"],
  timeUnitsAmount:{
    "ms":0.001,
    "MS":0.001,
    "s":1,
    "S":1,
    "m":60,
    "M":60,
    "h":3600,
    "H":3600,
    "d":86400,
    "D":86400,
    "y":31557600,
    "Y":31557600,
  },
  convertTime(amount:number,from:timeUnits,to:timeUnits="s"){
    if(typeof(amount) === "number" && this.timeUnits.includes(from) && this.timeUnits.includes(to)){
      return amount*this.timeUnitsAmount[from]/this.timeUnitsAmount[to]
    }else{
      return false
    }
  }
}

export default time