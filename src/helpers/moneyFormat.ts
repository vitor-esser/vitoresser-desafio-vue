export function formatValue(money: number) {
  const moneyFormated = money
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1_')
    .replace(/\./g, ',')
    .replace(/_/g, '.')

  return moneyFormated
}

export function moneyFormat(value: number, withCurrency = true): string {
  const fixedValue = Math.round(value * 100) / 100 || 0
  const formattedValue = formatValue(fixedValue).replace('-', '')
  const moneyFormated = `${withCurrency ? 'R$ ' : ''}${formattedValue}`
  return moneyFormated
}