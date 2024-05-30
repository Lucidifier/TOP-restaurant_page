import clearContent from './clearcontent';

function menuPage() {
  console.log('menupage');
  const container = document.querySelector('#content');
  const element = document.createElement('div');

  function renderMenuPage() {
    clearContent();
    element.innerText = 'MENU123';
    container.appendChild(element);
    console.log('menu');
    return element;
  }
  return renderMenuPage();
}
export default menuPage;