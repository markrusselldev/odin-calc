// math functions
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

// toggle "power on" styles
const power = document.querySelector(".odin");
power.addEventListener("click", () => {
  const screen = document.querySelector(".calculator-screen");
  screen.classList.toggle("glow");

  const buttons = document.querySelectorAll(".calculator-keys button");
  buttons.forEach(button => {
    button.classList.toggle("flux");
  });
});

// interface connections

function display(value) {
  const scr = document.querySelector(".calculator-screen");
  scr.textContent += value;
  console.log(value);
}

// need to loop buttons and add event listeners here

// main functions
let inputArray = [7, "+", 3, "*", 4, "/", 2]; // 20

function operate(inputArray) {
  // const opsArray = inputArray.filter(e => e === "+" || e === "-" || e === "*" || e === "/");
  const opsArray = inputArray.filter(e => isNaN(e));
  const numsArray = inputArray.filter(e => !opsArray.includes(e));
  //console.log(opsArray, numsArray);
  return evaluate(numsArray, opsArray);
}

// non-PEMDAS math operation and evaluate functions
function operation(a, operator, b) {
  if (a === 0 || b === 0) prompt("Odin frowns upon your zero!");
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b; // This will fail spectacularly if b is zero
    default:
      console.log("Unknown operator: " + operator);
      return NaN;
  }
}

function evaluate(numsArray, opsArray) {
  // require numsArray to have exactly one item more than opsArray
  if (opsArray.length + 1 != numsArray.length) {
    console.log("Error: Array lengths mismatch");
    return; // return if lengths aren't compatible
  }
  // begin with the first number
  let resultTally = numsArray[0];
  // we only need the index
  opsArray.forEach(function (_, index) {
    // apply the operation to resultTally and the next number
    resultTally = operation(resultTally, opsArray[index], numsArray[index + 1]);
  });

  console.log("Results: " + resultTally);
  return resultTally;
}
