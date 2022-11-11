const {toBinary,toOctal}=require("../javascript/numeral")





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
  
  test('should retrurn float  in binary format after make it int ', () => {
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

