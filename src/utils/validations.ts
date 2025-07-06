export function isValidNumber(phoneNumber: string) {
  return /09\d{9}/i.test(phoneNumber);
}
