import checkCardNumber from './card';

test('checkCardNumber should return false for card numbers contain letters', () => {
  expect(checkCardNumber('4716874705269491a')).toBe(false);
});

test('checkCardNumber should return false for card numbers contain letters', () => {
  expect(checkCardNumber('a4716874705269491')).toBe(false);
});

test('checkCardNumber should return false for card numbers contain letters', () => {
  expect(checkCardNumber('47168747a05269491a')).toBe(false);
});

test('checkCardNumber should return false for card numbers less then 13 digits (even if luhn is correct)', () => {
  expect(checkCardNumber('479927398713')).toBe(false);
});

test('checkCardNumber should handle spaces', () => {
  expect(checkCardNumber('4485 5828 5745 3388')).toBe(true);
});

test('checkCardNumber should return true for correct numbers', () => {
  expect(checkCardNumber('4485 5828 5745 3388')).toBe(true);
});

test.each([
  ['4485582857453388', true],
  ['4485582857453380', false],
  ['4485582857453381', false],
  ['4485582857453382', false],
  ['4485582857453383', false],
  ['4485582857453384', false],
  ['4485582857453385', false],
  ['4485582857453386', false],
  ['4485582857453387', false],
  ['4485582857453389', false],
  ['2720995267978795', true],
  ['2720995267978790', false],
  ['2720995267978791', false],
  ['2720995267978792', false],
  ['2720995267978793', false],
  ['2720995267978794', false],
  ['2720995267978796', false],
  ['2720995267978797', false],
  ['2720995267978798', false],
  ['2720995267978799', false],
])('should return correct result for %s', (number, result) => {
  expect(checkCardNumber(number)).toBe(result);
});
