/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
    var result;
    if (number < 5) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  console.log('10 is under five:', isUnderFive(10));
  console.log('4 is under five:', isUnderFive(4));
  
  function isEven(number) {
    var result;
    if (number % 2 === 0) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  console.log('4 is even:', isEven(4));
  console.log('5 is even:', isEven(5));
  
  function startsWithJ(string) {
    var result;
    if (string.startsWith('J')) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  
  console.log('Javascript starts with J:', startsWithJ('Javascript'));
  console.log('monkey starts with J:', startsWithJ('monkey'));
  
  function isOldEnoughToDrink(person) {
    var human = {
      name: 'Josh',
      age: 26
    };
    var result;
    if (human.age >= 21) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  console.log('isOldEnoughToDrink:', isOldEnoughToDrink('Josh'));
  
  function isOldEnoughToDrive(person) {
    var human = {
      name: 'Josh',
      age: 26
    };
    var result;
    if (human.age >= 16) {
      result = true;
    } else {
      result = false;
    }
    return result;
  }
  console.log('isOldEnoughToDrive:', isOldEnoughToDrive('Josh'));
  
  function isOldEnoughToDrinkAndDrive(person) {
    var human = {
      name: 'Rambo',
      age: 50
    };
    var result;
    if (human.age >= 1) {
      result = false;
    } else {
      result = false;
    }
    return result;
  }
  console.log('isOldEnoughToDrinkAndDrive:', isOldEnoughToDrinkAndDrive('Rambo'));
  
  function categorizeAcidity(pH) {
    var result;
    if (pH > 7 && pH < 14) {
      result = 'base';
    } else if (pH < 7 && pH > 0) {
      result = 'acid';
    } else if (pH === 7) {
      result = 'netural';
    } else {
      result = 'invalid pH level';
    }
    return result;
  }
  console.log('categorizeAcidity 6:', categorizeAcidity(6));
  console.log('categorizeAciditiy 7', categorizeAcidity(7));
  console.log('categorizeAcidity 8:', categorizeAcidity(8));
  console.log('categorizeAcidicty 16:', categorizeAcidity(16));
  
  function introduceWarnerBro(name) {
    var result;
    if ((name === 'yakko') || (name === 'wakko')) {
      result = 'We\'re the warner brothers!';
    } else if (name === 'dot') {
      result = 'I\'m cute~';
    } else {
      result = 'Goodnight Everybody!';
    }
    return result;
  }
  console.log('yakko warnerbrothers:', introduceWarnerBro('yakko'));
  console.log('wakko warner brothers:', introduceWarnerBro('wakko'));
  console.log('dot introduceWarnerBro:', introduceWarnerBro('dot'));
  console.log('josh choi was here:', introduceWarnerBro('josh choi'));
  