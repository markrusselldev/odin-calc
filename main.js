
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (arr) {
  return arr.reduce((last, next) => last * next, 1);
};

const divide = function (arr) {
  return arr.reduce((last, next) => last / next, 1);
};