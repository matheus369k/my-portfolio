import { FormatterDate } from "./formatter-date"

describe('formatted date', ()=>{
  it('formatted', ()=>{
    expect(FormatterDate(new Date('2022-07-31T05:33:29.567Z'))).toBe('31/07/2022')
  })
})