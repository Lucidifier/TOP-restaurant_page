import clearContent from './clearcontent.js';

function menuPage() {
  console.log('menupage');
  const contentContainer = document.querySelector('#content');
  const element = document.createElement('div');

  function renderMenuPage() {
    clearContent();
    element.innerText = 'MENU123';
    contentContainer.appendChild(element);
    console.log('menu');
    return element;
  }
  return renderMenuPage();
}
export default menuPage;