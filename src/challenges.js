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
  return `${lastName}, ${firstName}`;
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
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity
function highestCount(array) {
  const amountOfTimes = { number: -Infinity, repetition: 0 };
  for (let number of array) {
    if (number > amountOfTimes.number) {
      amountOfTimes.number = number;
      amountOfTimes.repetition = 0;
    }
    if (amountOfTimes.number === number) {
      amountOfTimes.repetition += 1;
    }
  }
  return amountOfTimes.repetition;
}

// let repetition = 0;
//   let numberOfTimesRepeated = array[0];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] >= numberOfTimesRepeated) {
//       repetition += 1;
//       if (array[index] > numberOfTimesRepeated) {
//         repetition = 1;
//       }
//       numberOfTimesRepeated = array[index];
//     }
//   }
//   return repetition;
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));

// Desafio 7
// https://stackoverflow.com/questions/46875442/unnecessary-else-after-return-no-else-return
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);
  if (positionCat1 < positionCat2) {
    return 'cat1';
  } if (positionCat1 > positionCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(0, 2, 3));

// Desafio 8
function fizzOrBuzz(number) {
  let fizzBuzzArray = '';
  if (number % 3 === 0) {
    fizzBuzzArray = 'fizz';
    if (number % 5 === 0) {
      fizzBuzzArray += 'Buzz';
    }
  } else if (number % 5 === 0) {
    fizzBuzzArray = 'buzz';
  } else {
    fizzBuzzArray = 'bug!';
  }
  return fizzBuzzArray;
}

function fizzBuzz(arrayOfNumbers) {
  const arrayFizzBuzz = [];
  for (let number of arrayOfNumbers) {
    arrayFizzBuzz.push(fizzOrBuzz(number));
  }
  return arrayFizzBuzz;
}

//   let fizzBuzzArray = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] % 3 === 0 && array[index] % 5 === 0) {
//       fizzBuzzArray.push('fizzBuzz');
//     } else if (array[index] % 3 === 0) {
//       fizzBuzzArray.push('fizz');
//     } else if (array[index] % 5 === 0) {
//       fizzBuzzArray.push('buzz');
//     } else {
//       fizzBuzzArray.push('bug!');
//     }
//   }
//   return fizzBuzzArray;
// }
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
// https://stackoverflow.com/questions/64503733/how-can-i-extract-vowels-in-a-javascript-string
function encode(string) {
  let a = string.replace(/[a]/g, '1');
  let e = a.replace(/e/g, '2');
  let i = e.replace(/i/g, '3');
  let o = i.replace(/o/g, '4');
  let u = o.replace(/u/g, '5');
  let result = u;
  return result;
}

//   let newString = string.split('');
//   let newString2 = '';
//   for (let index = 0; index < newString.length; index += 1) {
//     if (newString[index] === 'a') {
//       newString[index] = 1;
//     } else if (newString[index] === 'e') {
//       newString[index] = 2;
//     } else if (newString[index] === 'i') {
//       newString[index] = 3;
//     } else if (newString[index] === 'o') {
//       newString[index] = 4;
//     } else if (newString[index] === 'u') {
//       newString[index] = 5;
//     }
//   }
//   newString2 = newString.join('');
//   return newString2;
// }
console.log(encode('hi there'));

function decode(string) {
  let a1 = string.replace(/1/g, 'a');
  let e2 = a1.replace(/2/g, 'e');
  let i3 = e2.replace(/3/g, 'i');
  let o4 = i3.replace(/4/g, 'o');
  let u5 = o4.replace(/5/g, 'u');
  let result = u5;
  return result;
}

//   let newString = string.split('');
//   let newString2 = '';
//   for (let index = 0; index < newString.length; index += 1) {
//     if (newString[index] === '1') {
//       newString[index] = 'a';
//     } else if (newString[index] === '2') {
//       newString[index] = 'e';
//     } else if (newString[index] === '3') {
//       newString[index] = 'i';
//     } else if (newString[index] === '4') {
//       newString[index] = 'o';
//     } else if (newString[index] === '5') {
//       newString[index] = 'u';
//     }
//   }
//   newString2 = newString.join('');
//   return newString2;
// }
console.log(decode('h2ll4'));

// Desafio 10
function techList(technologyNames, name) {
  let tech = [];
  let order = technologyNames.sort();
  if (technologyNames.length === 0) {
    return 'Vazio!';
  } if (technologyNames.length !== 0) {
    for (let index = 0; index < order.length; index += 1) {
      tech.push({ tech: order[index], name });
    }
    return tech;
  }
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Rocha'));

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
