const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for(const i of arr){
    sum += i;
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
  for(const i of arr){
    sum *= i;
  }
  return sum;
};

const power = function(i, n) {
	return i ** n;
};

const factorial = function fact(n) {
  if(n == 0)
    return 1;
  else
   return (n * fact(n-1));
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
