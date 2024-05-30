import clearContent from './clearcontent';

function homePage() {
  console.log('homepage');
  const container = document.querySelector('#content');
  const element = document.createElement('div');

  function renderHomePage() {
    clearContent();
    element.innerText = 'home123';
    container.appendChild(element);
    console.log('home');
    return element;
  }
  return renderHomePage();
}
export default homePage;