export function FormatterNumber(number: number) {
  return new Intl.NumberFormat('pt-BR', {notation: 'compact'}).format(number)
}