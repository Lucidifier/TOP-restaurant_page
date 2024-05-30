import clearContent from './clearcontent';

function contactPage() {
  console.log('contactpage');
  const container = document.querySelector('#content');
  const element = document.createElement('div');

  function renderContactPage() {
    clearContent();
    element.innerText = 'CONTACT12345';
    container.appendChild(element);
    console.log('contact123');
    return element;
  }
  return renderContactPage();
}
export default contactPage;