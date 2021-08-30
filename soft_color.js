const brightnessIcon = document.querySelector('.bi-brightness-low');
const mainContainer = document.querySelector('.main__container');
const container = document.querySelector('.container');

brightnessIcon.addEventListener('click', () => {
  mainContainer.classList.toggle('darker__bacground');
  container.classList.toggle('paper__bacground');
});
