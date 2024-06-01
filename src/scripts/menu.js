import clearContent from './clearcontent.js';

function menuPage() {
  console.log('menupage');
  const contentContainer = document.querySelector('#content');
  const ContainerElement = document.createElement('div');
  const titleElement = document.createElement('div');
  const menuElement = document.createElement('div');
  let menuDivArr = [];

  //CREATES MULTIPLE DIVS
  function createMenuDivArray() {
    for(let i = 0; i <= 7; i++) {
      menuDivArr[i] = `menuElementDiv${i}`;
    };
    return menuDivArr;
  };

  function createMenuDivs() {
    for(let i = 0; i <= 7; i++) {
      menuDivArr[i] = document.createElement('div');
      contentContainer.appendChild(menuDivArr[i]);
    };
  };

  function renderMenuPage() {
    clearContent();
    createMenuDivArray()
    createMenuDivs();
    menuDivArr[0].innerText = '1';
    menuDivArr[1].innerText = '2';
    menuDivArr[2].innerText = '3';
    menuDivArr[3].innerText = '4';
    menuDivArr[4].innerText = '5';
    menuDivArr[5].innerText = '6';
    menuDivArr[6].innerText = '7';
    menuDivArr[7].innerText = '8';
    console.log('menuasd');
  }
  return renderMenuPage();
}
export default menuPage;