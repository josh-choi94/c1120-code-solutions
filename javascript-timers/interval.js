var head = document.querySelector('h1');
var counter = 4;

function countdown() {
  head.textContent = counter--;
  if (counter < 0) {
    head.textContent = 'Earth Beeeelooooow Us!';
  }
}

window.setInterval(countdown, 1000);