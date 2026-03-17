import { FormatterNumber } from "./formatter-number"

describe('formatted number', ()=>{
  it('formatted', ()=>{
    const regexEmptySpace = /\s/g
    expect(FormatterNumber(1000).replace(regexEmptySpace, '')).toEqual("1mil")
  })
  it('no formatted when less than one thousand', ()=>{
    expect(FormatterNumber(999)).toBe('999')
  })
})