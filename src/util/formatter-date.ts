export function FormatterDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR').format(date)
}
