export function toDate(time){
  const date = new Date(time)
  const options = {year: 'numeric', month: 'short', day: 'numeric'};

  return new Intl.DateTimeFormat('ru-RU', options).format(date)
}

export function toCurrency(price){
  return new Intl.NumberFormat('ru-RU', {
      currency: 'rub',
      style: 'currency'
  }).format(price);
}