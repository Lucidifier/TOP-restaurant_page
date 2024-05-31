import clearContent from './clearcontent.js';

function contactPage() {
  console.log('contactpage');
  const contentContainer = document.querySelector('#content');
  const element = document.createElement('div');

  function renderContactPage() {
    clearContent();
    element.innerText = 'CONTACT12345';
    contentContainer.appendChild(element);
    console.log('contact123');
    return element;
  }
  return renderContactPage();
}
export default contactPage;