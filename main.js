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
const arrowRunes = document.querySelectorAll(".arrow-runes");
const titleRunes = document.querySelectorAll(".title");
const keyButtons = document.querySelectorAll(".calculator-keys button");
let screen = document.querySelector(".calculator-screen");
let inputStr = "";

// toggle "power on" styles
powerButton.addEventListener("click", () => {
  odin.classList.toggle("power-on");
  powerButton.classList.toggle("power-on");
  screen.classList.toggle("firey-txt");
  screen.classList.toggle("magic-bg");
  arrowRunes.forEach(arrow => {
    arrow.classList.toggle("magic-txt");
  });
  titleRunes.forEach(title => {
    title.classList.toggle("firey-txt");
    toggleText(title);
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

function toggleText(element) {
  const content = element.innerHTML;
  switch (element.id) {
    case "col1":
      if (content.value !== "ODINS") {
        element.textContent = "ODINS";
        console.log("inside if content: " + content);
      }
      element.innerHTML = "&#5806;&#5841;&#5825;&#5822;&#5835;";
      console.log("outside if content: " + content);
      break;
    case "col2":
      // console.log("content: " + content);
      break;
    case "col3":
      // console.log("content: " + content);
      break;
    case "col4":
      // console.log("content: " + content);
      break;
    case "col5":
      // console.log("content: " + content);
      break;
    case "col6":
      // console.log("content: " + content);
      break;
    default:
      return;
  }
}

// main functions
function operate(inputStr) {
  const numsArray = inputStr.match(/[0-9]+/g);
  const opsArray = inputStr.match(/[\/\+\-\*]+/g);
  // console.log(numsArray);
  // console.log(opsArray);
  return evaluate(numsArray, opsArray);
}

// assign operators based on incomeing strings
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
        alert("Odin frowns upon thy feeble attempt to divide by zero. Begone, spawn of Midgaaard!");
        return;
      }
      return a / b;
    default:
      console.log("Unknown operator: " + operator);
      return;
  }
}

// non-PEMDAS math evaluate function
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
