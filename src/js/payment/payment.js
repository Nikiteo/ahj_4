export default function getPaySystem(text) {
  const paySystems = {
    2: 'mir',
    30: 'diners',
    36: 'diners',
    38: 'diners',
    31: 'jcb',
    35: 'jcb',
    34: 'ae',
    37: 'ae',
    4: 'visa',
    50: 'maestro',
    56: 'maestro',
    57: 'maestro',
    58: 'maestro',
    51: 'mastercard',
    52: 'mastercard',
    53: 'mastercard',
    54: 'mastercard',
    55: 'mastercard',
    60: 'discover',
    62: 'union',
    63: 'maestro',
    67: 'maestro',
    7: 'uek',
  };

  const noSpacedText = text.replace(/\s/g, '');
  let cardSystemCode = noSpacedText.charAt(0);
  if (cardSystemCode === '3' || cardSystemCode === '5' || cardSystemCode === '6') {
    cardSystemCode += noSpacedText.charAt(1);
  }

  return paySystems[cardSystemCode];
}
