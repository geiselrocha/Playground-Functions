function counterNumber(array) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  for (let value of array.join('')) {
    if (array.join('').match(RegExp(value, 'g')).length >= 3) {
      return true;
    }
  }
  return false;
}
// Desafio 11
function generatePhoneNumber(arr) {
  let result;
  if (arr.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (arr.join('').length > 11 || counterNumber(arr)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${arr.slice(0, 2).join('')}) ${arr.slice(2, 7).join('')}-${arr.slice(7).join('')}`;
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let stringNumber = string.match(/\d+/g).map(Number);
  let water = 0;
  for (const number of stringNumber) {
    water += number;
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
