const words = {
  BUZZ: 'buzz',
  FIZZ: 'fizz',
  FIZZBUZZ: 'fizzbuzz',
}

function fizzbuzz(input) {
  if (typeof input !== 'number') throw TypeError('invalid type');
  if (!Number.isInteger(input)) throw TypeError('invalid number');
  if (input < 1 || input > 9999) throw RangeError('The argument must be between 1 and 9999');
  if (input % 15 === 0) return words.FIZZBUZZ;
  if (input % 5 === 0) return words.BUZZ;
  if (input % 3 === 0) return words.FIZZ;
  return input;
}

module.exports = {
  fizzbuzz,
};
