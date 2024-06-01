import clearContent from './clearcontent.js';

function menuPage() {
  console.log('menupage');
  const contentContainer = document.querySelector('#content');
  const ContainerElement = document.createElement('div');
  const titleElement = document.createElement('div');
  const menuElement = document.createElement('div');
  

  function renderMenuPage() {
    clearContent();
    element.innerText = 'MENU123';
    contentContainer.appendChild(ContainerElement);
    console.log('menu');
    return ;
  }
  return renderMenuPage();
}
export default menuPage;