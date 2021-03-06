import checkCardNumber from './card/card';
import getPaySysytem from './payment/payment';
import ae from '../img/ae.png';
import diners from '../img/diners.png';
import discover from '../img/discover.png';
import jcb from '../img/jcb.png';
import maestro from '../img/maestro.png';
import mastercard from '../img/mastercard.png';
import mir from '../img/mir.png';
import uek from '../img/uek.png';
import union from '../img/union.png';
import visa from '../img/visa.png';

const validatorForm = document.querySelector('.validator_form');
const validatorInput = document.querySelector('.validator_input');
const validatorMessage = document.querySelector('.validator_message');
const validatorPicture = document.querySelector('.validator_pic');
const cardsURL = {
  mir,
  diners,
  jcb,
  ae,
  visa,
  maestro,
  mastercard,
  discover,
  union,
  uek,
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
