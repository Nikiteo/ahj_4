export default function checkCardNumber(text) {
  const hasLetters = text.match(/[^\d\s]/i);
  if (hasLetters) {
    return false;
  }

  const digits = text.replace(/\s/g, '').split('').map((item) => Number(item));
  if (digits.length < 13) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < digits.length; i += 1) {
    let digit = digits[i];
    if ((digits.length - i) % 2 === 0) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }

  return sum % 10 === 0;
}
