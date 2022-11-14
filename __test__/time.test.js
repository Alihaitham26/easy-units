const {default:time}=require("../javascript/time")

describe('test converter function', () => {
  test('should retrurn the time in seconds if input is valid', () => {
    expect(time.convertTime(10,"s","ms")).toBe(10000)
    expect(time.convertTime(10,"D","h")).toBe(240)
    expect(time.convertTime(10,"Y","h")).toBe(87660) 
    expect(time.convertTime(200,"ms","s")).toBe(0.2) 
    expect(time.convertTime(600000,"ms","m")).toBe(10)
    expect(time.convertTime(4,"y","d")).toBe(1461)
    expect(time.convertTime(4,"y","MS")).toBe(126230400000)
    expect(time.convertTime(124,"y","S")).toBe(3913142400)
    expect(time.convertTime(64,"d")).toBe(5529600)
  })
  test('should return the same amount if form and to are the same', () => {
    expect(time.convertTime(1,"ms","ms")).toBe(1) 
    expect(time.convertTime(2,"s","s")).toBe(2) 
    expect(time.convertTime(3,"m","m")).toBe(3) 
    expect(time.convertTime(4,"h","h")).toBe(4) 
    expect(time.convertTime(5,"d","d")).toBe(5) 
    expect(time.convertTime(6,"y","y")).toBe(6)
  })
  test('should return the same amount if form and to are the same', () => {
    expect(time.convertTime(1000,"MS","ms")).toBe(1000) 
    expect(time.convertTime(2000,"S","s")).toBe(2000) 
    expect(time.convertTime(3000,"M","m")).toBe(3000) 
    expect(time.convertTime(4000,"H","h")).toBe(4000) 
    expect(time.convertTime(5000,"D","d")).toBe(5000) 
    expect(time.convertTime(6000,"Y","y")).toBe(6000)
  })
  test('should return false if inputs is invalid', () => {
    expect(time.convertTime("6000","Y","y")).toBe(false)
    expect(time.convertTime(6000,"O","y")).toBe(false)
    expect(time.convertTime(6000,"Y","O")).toBe(false)
    expect(time.convertTime("hello","Y","s")).toBe(false)
    expect(time.convertTime(1,"year","second")).toBe(false)
    
  })
  
  
})
