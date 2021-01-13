const takeAChance = require('./take-a-chance');

const name = takeAChance('Josh');

name.then(resolve => {
  console.log(resolve);
}, reject => {
  console.log(reject.message);
});

