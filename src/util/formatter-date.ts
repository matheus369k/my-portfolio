export function FormatterDate(date: Date) {
  console.log(date)
  return new Intl.DateTimeFormat().format(date)
}
