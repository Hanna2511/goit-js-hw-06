const refs = {
  bodyColor: document.querySelector('body'),
  startButton: document.querySelector('.start'),
  stopButton: document.querySelector('.span.color'),
}

refs.startButton.addEventListener('click', start);
refs.stopButton.addEventListener('click', span.color);


function getRandomHexColor(min, max) {
    return Math.ceil(Math.random() * (max - min) + min)
  }