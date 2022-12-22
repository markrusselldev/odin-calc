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

// get elements
const powerButton = document.querySelector(".power-button");
const odin = document.querySelector(".odin");
const titleRunes = document.querySelectorAll(".title");
const keyButtons = document.querySelectorAll(".calculator-keys button");
let screen = document.querySelector(".calculator-screen");
let inputStr = "";

// toggle "power on" styles
powerButton.addEventListener("click", () => {
  odin.classList.toggle("power-on");
  powerButton.classList.toggle("power-on");
  screen.classList.toggle("firey-magic-light");
  titleRunes.forEach(title => {
    title.classList.toggle("firey-light");
  });
  keyButtons.forEach(button => {
    button.classList.toggle("flux");
  });
});

// loop key buttons and add event listeners
keyButtons.forEach(button => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    inputStr += button.value;
    display(button.value);
    console.log("inputStr: " + inputStr);
  });
});

// display
function display(value) {
  let displayValue = value;
  if (screen.value === "0") screen.value = "";
  // https://www.toptal.com/designers/htmlarrows/math/
  // javascript escape notation for a character in a quoted string is \uxxxx
  // where xxxx is four hexadecimal digits that specify the Unicode code number
  if (value === "+") displayValue = "\u002B";
  if (value === "-") displayValue = "\u2212";
  if (value === "*") displayValue = "\u00D7";
  if (value === "/") displayValue = "\u00F7";
  screen.value += displayValue;
  // console.log("screen.value: " + screen.value);
  // console.log("displayValue " + displayValue);
}

// main functions
function operate(inputStr) {
  const numsArray = inputStr.match(/[0-9]+/g);
  const opsArray = inputStr.match(/[\/\+\-\*]+/g);
  // console.log(numsArray);
  // console.log(opsArray);
  return evaluate(numsArray, opsArray);
}

// non-PEMDAS math operation and evaluate functions
function operation(a, operator, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        // check if b is zero before dividing
        alert("Odin frowns upon thy feeble attempt to divide by zero. Begone, spawn of Midgard!");
        return;
      }
      return a / b;
    default:
      console.log("Unknown operator: " + operator);
      return;
  }
}

function evaluate(numsArray, opsArray) {
  // require numsArray to have exactly one item more than opsArray
  if (opsArray.length + 1 != numsArray.length) {
    alert("Don't you know how simple math works, mortal? Number, operator, number, operator, number, etc.");
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

  // console.log("Results: " + resultTally);
  return resultTally;
}
