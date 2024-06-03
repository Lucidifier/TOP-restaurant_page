import clearContent from './clearcontent.js';

function contactPage() {
  const contentContainer = document.querySelector("#content");
  const containerElement = document.createElement("div");
  containerElement.id = "contactContainerElement";
  const titleElement = document.createElement("div");
  const infoElement = document.createElement("div");
  const formElement = document.createElement("div");
  let infoParagraphArr = [];

  function createInfoParagraphArray() {
    for (let i = 0; i <= 3; i++) {
      infoParagraphArr[i] = `infoParagraph${i}`;
    };
    return infoParagraphArr;
  };

  function createInfoParagraphs() {
    for (let i = 0; i <= 3; i++) {
      infoParagraphArr[i] = document.createElement("p");
      infoElement.appendChild(infoParagraphArr[i]);
    };
  };

  function renderInfoElement() {
    createInfoParagraphArray();
    createInfoParagraphs();
    infoParagraphArr[0].innerText = 'Imaginary Adress 69';
    infoParagraphArr[1].innerText = '47039 Made Up Country'
    infoParagraphArr[2].innerText = '+48592-239-284';
    infoParagraphArr[3].innerText = 'Check Our Socials'
  };

  function renderFormElement() {
    const formField = document.createElement('form');
    formField.setAttribute('method', 'post');
    const formFieldLabel = document.createElement('label');
    formFieldLabel.setAttribute('for', 'comment_box');
    formFieldLabel.innerText = 'Leave a comment or a suggestion:';
    formField.appendChild(formFieldLabel);
    const formFieldInput = document.createElement('textarea');
    formFieldInput.setAttribute('id', 'comment_box');
    formFieldInput.setAttribute('name', 'comment_box');
    formFieldInput.setAttribute('placeholder', 'Fancy Beach Bar was awesome!');
    formFieldInput.setAttribute('maxlength', '500');
    formField.appendChild(formFieldInput);
    const formFieldButton = document.createElement('button');
    formFieldButton.innerText = 'SUBMIT';
    formField.appendChild(formFieldButton);
    return formElement.appendChild(formField);
  }

  function renderContactPage() {
    clearContent();
    contentContainer.appendChild(containerElement);
    titleElement.innerText = "CONTACT US";
    containerElement.appendChild(titleElement);
    renderInfoElement();
    containerElement.appendChild(infoElement);
    renderFormElement();
    containerElement.appendChild(formElement);
  };
  return renderContactPage();
};
export default contactPage;