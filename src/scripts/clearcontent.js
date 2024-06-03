function clearContent() {
  const container = document.querySelector('#content');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  };
};

export default clearContent;