var x = 1;
var y = 2;
var z = 3;
var maximumValue = (Math.max(x, y, z));
console.log('maxmimumValue:', maximumValue);

var heroes = ['Batman', 'Superman', 'Aquaman', 'Flash'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [

  {
    title: 'Harry Potter',
    author: ' JK Rowling'
  },
  {
    title: 'Great Gatsby',
    author: 'F. Scott Fitzgerald'
  },
  {
    title: 'Adventures of Huckleberry Finn',
    author: 'Mark Twain'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'

};
var css = {
  title: 'CSS Secrets',
  authors: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'josh choi';

var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
