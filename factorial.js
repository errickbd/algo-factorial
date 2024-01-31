function factorial(num) {

  return ([...Array(num + 1).keys()].slice(1)).reduce((accumulator, currentValue) => accumulator * currentValue, );
}

module.exports = factorial;

console.log(factorial(4))
// .reduce((accumulator, currentValue) => accumulator * currentValue);