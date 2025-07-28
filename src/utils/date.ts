export function formateDate(date: Date) {
  const [day, , month, , year] = Intl.DateTimeFormat("fa-IR", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).formatToParts(date);

  return `${day.value} ${month.value} ${year.value}`;
}
