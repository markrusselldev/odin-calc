/* math functions */ 
const add = function (arr) {
  return arr.reduce((last, next) => last + next, 0);
};
// no initial value for subtract
const subtract = function (arr) {
  return arr.reduce((last, next) => last - next);
};

const multiply = function (arr) {
  return arr.reduce((last, next) => last * next, 1);
};
// no initial value for divide
const divide = function (arr) {
  return arr.reduce((last, next) => last / next);
};

/* main functions */
let input = [3, "*", 4, "/", 2];

function operate(input) {
  const operators = input.filter(e => e === "+" || e === "-" || e === "*" || e === "/");
  const numbers = input.filter(e => !operators.includes(e));
  console.log(operators, numbers);
}
