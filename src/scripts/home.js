import clearContent from './clearcontent.js';
import image from '../images/beach_bar.jpg';

function homePage() {
  console.log('homepage');
  const contentContainer = document.querySelector('#content');
  const containerElement = document.createElement('div');
  const imageContainerElement = document.createElement('div');
  const imageElement = new Image();
  const titleElement =  document.createElement('div');
  const textElement = document.createElement('div');

  function renderHomePage() {
    clearContent();
    containerElement.id = 'homeContainerElement';

    imageContainerElement.id = 'homeImageContainer';
    // imageContainerElement.innerText = 'image';
    imageElement.src = image;
    imageContainerElement.appendChild(imageElement);

    titleElement.id = 'homeTitleElement';
    titleElement.innerText = 'Fancy Beach Bar';

    textElement.id = 'homeTextElement';
    textElement.innerText = 'Spend this summer in the fanciest beach bar available!';

    containerElement.appendChild(imageContainerElement);
    containerElement.appendChild(titleElement);
    containerElement.appendChild(textElement);

    contentContainer.appendChild(containerElement);
    console.log('home');
    return containerElement;
  }
  return renderHomePage();
}
export default homePage;