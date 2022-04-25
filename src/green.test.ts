import { Calculator } from './index'

describe('Kata Calculator', () => {
  const calculator = new Calculator()

  it('Should return 0', () => {
    expect(calculator.add('')).toBe('0')
  })

  it('Should return a number', () => {
    expect(calculator.add('1')).toBe('1')
    expect(calculator.add('2')).toBe('2')
  })

  it('Should return a 0 if is not a number', () => {
    expect(calculator.add('a')).toBe('0')
    expect(calculator.add('abc')).toBe('0')
  })

  it('Should return a sum of numbers', () => {
    expect(calculator.add('1,2')).toBe('3')
    expect(calculator.add('1,2,3')).toBe('6')
    expect(calculator.add('1,2,3,4')).toBe('10')
    expect(calculator.add('1,2,A,4')).toBe('7')
    expect(calculator.add('1,\n2,3')).toBe('6')
  })

  it('Shoud return a numbers but with different delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe('3')
    expect(calculator.add('//.\n1.2')).toBe('3')
  })

  it(' Shoud return a invalid when numbers are negative', () => {
    expect(calculator.add('-1,2,3')).toBe([ 'Invalid' ])
  })
})
