import './styles/style.css';
import home from './scripts/home.js';
import menu from './scripts/menu.js';
import contact from './scripts/contact.js';

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