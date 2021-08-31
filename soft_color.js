const brightnessIcon = document.querySelector('.bi-brightness-low');
const mainContainer = document.querySelector('.main__container');
const containers = document.querySelectorAll('.container');

brightnessIcon.addEventListener('click', () => {
  mainContainer.classList.toggle('darker__bacground');
  containers.forEach((container) => {
    container.classList.toggle('paper__bacground');
  });
});
