import './style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

function buttonFunctionality() {
  const buttonHome = document.querySelector('#buttonHome');
  const buttonMenu = document.querySelector('#buttonMenu');
  const buttonContact = document.querySelector('#buttonContact');

  buttonHome.addEventListener('click', home)

  buttonMenu.addEventListener('click', menu);

  buttonContact.addEventListener('click', contact);
}

home();
buttonFunctionality();

console.log('xd');