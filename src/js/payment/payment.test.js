import getPaySystem from './payment';

test('should handle spaces (return visa)', () => {
  expect(getPaySystem('4 9 2 9 6667 5750 3923')).toBe('visa');
});

test.each([
  ['200'],
  ['201'],
  ['202'],
  ['203'],
  ['204'],
  ['205'],
  ['206'],
  ['207'],
  ['208'],
  ['209'],
])('should return "mir" for any cards start with "2"', (number) => {
  expect(getPaySystem(number)).toBe('mir');
});

test.each([
  ['400'],
  ['401'],
  ['402'],
  ['403'],
  ['404'],
  ['405'],
  ['406'],
  ['407'],
  ['408'],
  ['409'],
])('should return "visa" for any cards start with "4"', (number) => {
  expect(getPaySystem(number)).toBe('visa');
});

test.each([
  ['700'],
  ['701'],
  ['702'],
  ['703'],
  ['704'],
  ['705'],
  ['706'],
  ['707'],
  ['708'],
  ['709'],
])('should return "uek" for any cards start with "7"', (number) => {
  expect(getPaySystem(number)).toBe('uek');
});

test.each([
  ['300'],
  ['361'],
  ['381'],
])('should return "diners" for %s', (number) => {
  expect(getPaySystem(number)).toBe('diners');
});

test.each([
  ['500'],
  ['560'],
  ['570'],
  ['580'],
  ['630'],
  ['670'],
])('should return "maestro" for %s', (number) => {
  expect(getPaySystem(number)).toBe('maestro');
});

test.each([
  ['510'],
  ['520'],
  ['530'],
  ['540'],
  ['550'],
])('should return "mastercard" for %s', (number) => {
  expect(getPaySystem(number)).toBe('mastercard');
});

test.each([
  ['600'],
])('should return "discover" for %s', (number) => {
  expect(getPaySystem(number)).toBe('discover');
});

test.each([
  ['620'],
])('should return "union" for %s', (number) => {
  expect(getPaySystem(number)).toBe('union');
});
