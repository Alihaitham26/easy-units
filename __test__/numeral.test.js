const {toBinary,toOctal, toHex,fromBinary,fromOctal,fromHex}=require("../javascript/numeral")





describe('check toBinary', () => {


  test('should return 0 as string if there is no input', () => {
    expect(toBinary()).toBe("0")
  })
  
  test('should retrurn number in binary format', () => {
    expect(toBinary(0)).toBe("0")
    expect(toBinary(1)).toBe("1")
    expect(toBinary(2)).toBe("10")
    expect(toBinary(3)).toBe("11")
    expect(toBinary(4)).toBe("100")
    expect(toBinary(1021)).toBe("1111111101")
    expect(toBinary(1203)).toBe("10010110011")
    expect(toBinary(10212031)).toBe("100110111101001010111111")
  })
  
  test('should retrurn float  in binary format after make it int ', () => {
    expect(toBinary(0.4)).toBe("0")
    expect(toBinary(1.2)).toBe("1")
    expect(toBinary(2.4)).toBe("10")
    expect(toBinary(3.9)).toBe("11")
    expect(toBinary(4.2)).toBe("100")
    expect(toBinary(1021.234)).toBe("1111111101")
    expect(toBinary(1203.103)).toBe("10010110011")
    expect(toBinary(10212031.11)).toBe("100110111101001010111111")
  })

  test('should return flase if the input is not vaild', () => {
    expect(toBinary("100")).toBe(false)
    expect(toBinary(true)).toBe(false)
    expect(toBinary(false)).toBe(false)
    expect(toBinary({"ali":"ali"})).toBe(false)
    expect(toBinary([1,2,3])).toBe(false)
    expect(toBinary([0,0,0])).toBe(false)
    expect(toBinary([])).toBe(false)
    expect(toBinary({})).toBe(false)
    expect(toBinary(null)).toBe(false)
    expect(toBinary("hello")).toBe(false)
  })
  
})


describe('check toOctal', () => {


  test('should return 0 as string if there is no input', () => {
    expect(toOctal()).toBe("0")
  })
  
  test('should retrurn number in binary format', () => {
    expect(toOctal(0)).toBe("0")
    expect(toOctal(1)).toBe("1")
    expect(toOctal(2)).toBe("2")
    expect(toOctal(3)).toBe("3")
    expect(toOctal(4)).toBe("4")
    expect(toOctal(8)).toBe("10")
    expect(toOctal(6013)).toBe("13575")
    expect(toOctal(1023)).toBe("1777")
  })
  
  test('should retrurn float  in octal format after make it int ', () => {
    expect(toOctal(0.1)).toBe("0")
    expect(toOctal(1.2)).toBe("1")
    expect(toOctal(2.6)).toBe("2")
    expect(toOctal(3.7)).toBe("3")
    expect(toOctal(4.5)).toBe("4")
    expect(toOctal(8.9)).toBe("10")
    expect(toOctal(6013.891)).toBe("13575")
    expect(toOctal(1023.1919)).toBe("1777")
  })

  test('should return flase if the input is not vaild', () => {
    expect(toOctal("100")).toBe(false)
    expect(toOctal(true)).toBe(false)
    expect(toOctal(false)).toBe(false)
    expect(toOctal({"ali":"ali"})).toBe(false)
    expect(toOctal([1,2,3])).toBe(false)
    expect(toOctal([0,0,0])).toBe(false)
    expect(toOctal([])).toBe(false)
    expect(toOctal({})).toBe(false)
    expect(toOctal(null)).toBe(false)
    expect(toOctal("hello")).toBe(false)
  })
  
})
describe('check toHexa', () => {


  test('should return 0 as string if there is no input', () => {
    expect(toHex()).toBe("0")
  })
  
  test('should retrurn number in hex format', () => {
    expect(toHex(0)).toBe("0")
    expect(toHex(1)).toBe("1")
    expect(toHex(2)).toBe("2")
    expect(toHex(3)).toBe("3")
    expect(toHex(4)).toBe("4")
    expect(toHex(8)).toBe("8")
    expect(toHex(10)).toBe("A")
    expect(toHex(16)).toBe("10")
    expect(toHex(1614)).toBe("64E")
    expect(toHex(114101451)).toBe("6CD0CCB")
    expect(toHex(1000000)).toBe("F4240")
  })
  
  test('should retrurn float  in binary format after make it int ', () => {
    expect(toHex(0.5618)).toBe("0")
    expect(toHex(1.9)).toBe("1")
    expect(toHex(2.8)).toBe("2")
    expect(toHex(3.7)).toBe("3")
    expect(toHex(4.6)).toBe("4")
    expect(toHex(8.3)).toBe("8")
    expect(toHex(12.14)).toBe("C")
    expect(toHex(17.19)).toBe("11")
    expect(toHex(1614.13)).toBe("64E")
    expect(toHex(114101451.12)).toBe("6CD0CCB")
    expect(toHex(1000001.12413)).toBe("F4241")
  })

  test('should return flase if the input is not vaild', () => {
    expect(toHex("100")).toBe(false)
    expect(toHex(true)).toBe(false)
    expect(toHex(false)).toBe(false)
    expect(toHex({"ali":"ali"})).toBe(false)
    expect(toHex([1,2,3])).toBe(false)
    expect(toHex([0,0,0])).toBe(false)
    expect(toHex([])).toBe(false)
    expect(toHex({})).toBe(false)
    expect(toHex(null)).toBe(false)
    expect(toHex("hello")).toBe(false)
  })
  
})

describe('check fromBinary', () => {
  test('should return 0 if there is no input', () => {
    expect(fromBinary()).toBe(0)
  })

  
  test('should return decimal if input type is string', () => {
    expect(fromBinary("0")).toBe(0)
    expect(fromBinary("1")).toBe(1)
    expect(fromBinary("100")).toBe(4)
    expect(fromBinary("101")).toBe(5)
    expect(fromBinary("10011011010")).toBe(1242)
    expect(fromBinary("11111011111")).toBe(2015)
    expect(fromBinary("1001100100001000010")).toBe(313410)
  })
  

  test('should return false if input is invalid', () => {
    expect(fromBinary({})).toBe(false)
    expect(fromBinary([])).toBe(false)
    expect(fromBinary(null)).toBe(false)
    expect(fromBinary({name:"ali"})).toBe(false)
    expect(fromBinary([1,4,5])).toBe(false)
    expect(fromBinary("why you do that")).toBe(false)
    expect(fromBinary(1313)).toBe(false)
    expect(fromBinary(4131)).toBe(false)
    expect(fromBinary(100010041400100)).toBe(false)
    expect(fromBinary(1000100141400100)).toBe(false)
    expect(fromBinary(100010010051100)).toBe(false)
    expect(fromBinary(100010010100)).toBe(false)
  })
  
})

describe('check fromOctal', () => {
  test('should return 0 if there is no input', () => {
    expect(fromOctal()).toBe(0)
  })

  
  test('should return decimal if input type is string', () => {
    expect(fromOctal("0")).toBe(0)
    expect(fromOctal("1")).toBe(1)
    expect(fromOctal("3")).toBe(3)
    expect(fromOctal("6")).toBe(6)
    expect(fromOctal("7")).toBe(7)
    expect(fromOctal("10")).toBe(8)
    expect(fromOctal("1701")).toBe(961)
    expect(fromOctal("100000")).toBe(32768)
    expect(fromOctal("7312041")).toBe(1938465)
    expect(fromOctal("72732650661")).toBe(7909102001)
  })
  

  test('should return false if input is invalid', () => {
    expect(fromOctal({})).toBe(false)
    expect(fromOctal([])).toBe(false)
    expect(fromOctal(null)).toBe(false)
    expect(fromOctal({name:"ali"})).toBe(false)
    expect(fromOctal([1,4,5])).toBe(false)
    expect(fromOctal("why you do that")).toBe(false)
    expect(fromOctal(1313)).toBe(false)
    expect(fromOctal(4131)).toBe(false)
    expect(fromOctal(100010041400100)).toBe(false)
    expect(fromOctal(1000100141400100)).toBe(false)
    expect(fromOctal(100010010051100)).toBe(false)
    expect(fromOctal(100010010100)).toBe(false)
    expect(fromOctal("181")).toBe(false)
    expect(fromOctal("1F1")).toBe(false)
    expect(fromOctal("1911")).toBe(false)
  })
  
})


describe('check fromOctal', () => {
  test('should return 0 if there is no input', () => {
    expect(fromHex()).toBe(0)
  })

  
  test('should return decimal if input type is string', () => {
    expect(fromHex("0")).toBe(0)
    expect(fromHex("1")).toBe(1)
    expect(fromHex("3")).toBe(3)
    expect(fromHex("8")).toBe(8)
    expect(fromHex("A")).toBe(10)
    expect(fromHex("a")).toBe(10)
    expect(fromHex("F")).toBe(15)
    expect(fromHex("3EA")).toBe(1002)
    expect(fromHex("4F56")).toBe(20310)
    expect(fromHex("Fc")).toBe(252)
    expect(fromHex("1A75e2")).toBe(1734114)
  })
  

  test('should return false if input is invalid', () => {
    expect(fromHex({})).toBe(false)
    expect(fromHex([])).toBe(false)
    expect(fromHex(null)).toBe(false)
    expect(fromHex({name:"ali"})).toBe(false)
    expect(fromHex([1,4,5])).toBe(false)
    expect(fromHex("why you do that")).toBe(false)
    expect(fromHex(1313)).toBe(false)
    expect(fromHex(4131)).toBe(false)
    expect(fromHex(100010041400100)).toBe(false)
    expect(fromHex(1000100141400100)).toBe(false)
    expect(fromHex(100010010051100)).toBe(false)
    expect(fromHex(100010010100)).toBe(false)
    expect(fromHex("1G1")).toBe(false)
    expect(fromHex("1R2")).toBe(false)
    expect(fromHex("FFFFFF1FFFO")).toBe(false)
  })
  
})