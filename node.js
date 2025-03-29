const soundButtons = document.querySelectorAll('.sound-button');

soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.dataset.sound;
    const audio = new Audio(soundFile);
    audio.play();
  });
});