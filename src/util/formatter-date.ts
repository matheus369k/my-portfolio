export function FormatterDate(date: Date) {
  return new Intl.DateTimeFormat().format(date)
}
