// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue());

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea());

// Desafio 3
function splitSentence(neWPhrase) {
  let phrase = neWPhrase.split(' ');
  return phrase;
}
console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(fullName) {
  let firstName = fullName[0];
  let lastName = fullName[fullName.length - 1];
  return lastName + ', ' + firstName;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  let totalPoints = winsPoints + tiesPoints;
  return totalPoints;
}
console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(array) {
  let repetition = 0;
  let numberOfTimesRepeated = array[0];

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= numberOfTimesRepeated) {
      repetition += 1;
      if (array[index] > numberOfTimesRepeated) {
        repetition = 1;
      }
      numberOfTimesRepeated = array[index];
    }
  }
  return repetition;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);
  if (positionCat1 < positionCat2) {
    return 'cat1';
  } else if (positionCat1 > positionCat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(0, 2, 3));

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let newString = string.split("");
  let newString2 = "";
  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] === 'a') {
      newString[index] = 1;
    } else if (newString[index] === 'e') {
      newString[index] = 2;
    } else if (newString[index] === 'i') {
      newString[index] = 3;
    } else if (newString[index] === 'o') {
      newString[index] = 4;
    } else if (newString[index] === 'u') {
      newString[index] = 5;
    }
  }
  newString2 = newString.join("");
  return newString2;
}
console.log(encode('hi there'));

function decode(string) {
  let newString = string.split("");
  let newString2 = "";
  for (let index = 0; index < newString.length; index += 1) {
    if (newString[index] === '1') {
      newString[index] = 'a';
    } else if (newString[index] === '2') {
      newString[index] = 'e';
    } else if (newString[index] === '3') {
      newString[index] = 'i';
    } else if (newString[index] === '4') {
      newString[index] = 'o';
    } else if (newString[index] === '5') {
      newString[index] = 'u';
    }
  }
  newString2 = newString.join('');
  return newString2;
}
console.log(decode('h2ll4'));

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
