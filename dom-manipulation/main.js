
var count = 0;
var hot = document.querySelector('.hot-button');
var click = document.querySelector('.click-count');

addEventListener('click', function (event) {
  count++;

  var temp;
  if (count < 4) {
    temp = 'cold';
  } else if (count < 7) {
    temp = 'cool';
  } else if (count < 10) {
    temp = 'tepid';
  } else if (count < 13) {
    temp = 'warm';
  } else if (count < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }

  hot.className = 'hot-button ' + temp;
  click.textContent = 'clicks' + count;
});
