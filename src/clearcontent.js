function clearContent() {
  const container = document.querySelector('#content');
  console.log('clearallmenu');
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  };
};

export default clearContent;