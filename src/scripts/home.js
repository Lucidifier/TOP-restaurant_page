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
    imageElement.src = image;
    imageContainerElement.appendChild(imageElement);

    titleElement.id = 'homeTitleElement';
    titleElement.innerText = 'Fancy Beach Bar';

    textElement.id = 'homeTextElement';
    textElement.innerText = 'Refresh yourself on warm summer days at the fanciest beach bar available! We offer highest quality of selected coctails, relaxing atmosphere, and friendly staff, which will make your vacation days memorable forever!';

    containerElement.appendChild(imageContainerElement);
    containerElement.appendChild(titleElement);
    containerElement.appendChild(textElement);

    contentContainer.appendChild(containerElement);
    console.log('home');
  };
  return renderHomePage();
}
export default homePage;