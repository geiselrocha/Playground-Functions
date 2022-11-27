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
function generatePhoneNumber(array) {
  let result;
  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (array.join('').length > 11 || counterNumber(array)) {
    result = 'não é possível gerar um número de telefone com esses valores';
  } else {
    result = `(${array.slice(0, 2).join('')}) 
    ${array.slice(2, 7).join('')}-
    ${array.slice(7).join('')}`;
  }
  return result;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
