import checkCardNumber from './card/card';
import getPaySysytem from './payment/payment';

const validatorForm = document.querySelector('.validator_form');
const validatorInput = document.querySelector('.validator_input');
const validatorMessage = document.querySelector('.validator_message');
const validatorPicture = document.querySelector('.validator_pic');
const cardsURL = {
  mir: '../../src/img/mir.png',
  diners: '../../src/img/diners.png',
  jcb: '../../src/img/jcb.png',
  ae: '../../src/img/ae.png',
  visa: '../../src/img/visa.png',
  maestro: '../../src/img/maestro.png',
  mastercard: '../../src/img/mastercard.png',
  discover: '../../src/img/discover.png',
  union: '../../src/img/union.png',
  uek: '../../src/img/uek.png',
};

function showOkMessage() {
  validatorMessage.innerText = 'Номер верный';
  validatorMessage.style.color = '#2C5F1C';
  validatorMessage.style.height = `${validatorMessage.scrollHeight}px`;
}

function showErrorMessage() {
  validatorMessage.innerText = 'Ошибка в номере';
  validatorMessage.style.color = '#E63946';
  validatorMessage.style.height = `${validatorMessage.scrollHeight}px`;
}

function hideMessage() {
  validatorMessage.style.height = 0;
}

function showCardPicture(text) {
  validatorPicture.style.backgroundImage = `Url('${cardsURL[getPaySysytem(text)]}')`;
}

function hideCardPicture() {
  validatorPicture.style.backgroundImage = 'none';
}

function onSubmit() {
  const text = validatorInput.value;
  const isValid = checkCardNumber(text);
  if (isValid) {
    showOkMessage();
    showCardPicture(text);
  } else {
    showErrorMessage();
  }
}

validatorForm.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
});

validatorInput.addEventListener('input', (e) => {
  e.preventDefault();
  hideMessage();
  hideCardPicture();
});

validatorInput.addEventListener('focus', (e) => {
  e.preventDefault();
  e.target.value = '';
  hideMessage();
  hideCardPicture();
});
