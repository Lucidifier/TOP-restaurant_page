import clearContent from './clearcontent.js';

function menuPage() {
  console.log('menupage');
  const contentContainer = document.querySelector('#content');
  const containerElement = document.createElement('div');
  const titleElement = document.createElement('div');
  const menuElement = document.createElement('div');
  let menuDivArr = [];

  //CREATES MULTIPLE DIVS THROUGH ARRAY  SO THEY  CAN BE  INDIVIDUALLY  SELECTED AND EDITED
  function createMenuDivArray() {
    for(let i = 0; i <= 7; i++) {
      menuDivArr[i] = `menuElementDiv${i}`;
    };
    return menuDivArr;
  };

  function createMenuDivs() {
    for(let i = 0; i <= 7; i++) {
      menuDivArr[i] = document.createElement('div');
      menuElement.appendChild(menuDivArr[i]);
    };
  };

  function renderMenuPage() {
    clearContent();
    createMenuDivArray()
    contentContainer.appendChild(containerElement);
    containerElement.appendChild(titleElement);
    containerElement.appendChild(menuElement);
    containerElement.id = 'menuContainerElement';
    titleElement.innerText = 'MENU';
    createMenuDivs();
    menuDivArr[0].innerText = 'MOJITO';
    menuDivArr[1].innerText = '10e';
    menuDivArr[2].innerText = 'SEX ON THE BEACH';
    menuDivArr[3].innerText = '12e';
    menuDivArr[4].innerText = 'BLACK RUSSIAN';
    menuDivArr[5].innerText = '8e';
    menuDivArr[6].innerText = 'TEQUILA SUNRISE';
    menuDivArr[7].innerText = '15e';
    console.log('menuasd');
  }
  return renderMenuPage();
}
export default menuPage;