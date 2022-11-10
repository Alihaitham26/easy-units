const {toBinary}=require("../javascript/numeral")


describe('check binary functions', () => {


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
  
})
