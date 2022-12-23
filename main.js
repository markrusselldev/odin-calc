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
const headers = document.querySelectorAll(".header");
const titleRunes = document.querySelectorAll(".title");
const keyButtons = document.querySelectorAll(".calculator-keys button");
// audio files
const thunder = new Audio("audio/distant-thunder.mp3");
const lightning = new Audio("audio/lightning.mp3");
const whoosh = new Audio("audio/whoosh.mp3");
const impact = new Audio("audio/impact-thunder.mp3");
// variables
let screen = document.querySelector(".calculator-screen");
let inputStr = "";

// toggle "power on" styles
powerButton.addEventListener("click", () => {
  thunder.currentTime = 0; // rewind audio to the start each time
  thunder.play();
  odin.classList.toggle("power-on");
  powerButton.classList.toggle("power-on");
  screen.classList.toggle("firey-txt");
  screen.classList.toggle("magic-bg");
  headers.forEach(header => {
    header.classList.toggle("magic-txt");
    toggleText(header);
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
    whoosh.currentTime = 0; // rewind audio to the start each time
    whoosh.play();
    display(button.value);
    // console.log("inputStr: " + inputStr);
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
// Toggle Runic/English text
function toggleText(element) {
  const content = element.innerHTML;
  switch (element.id) {
    case "header-left":
      if (content === "0DIN") {
        return (element.innerHTML = "&#5806;&#5841;&#5825;&#5822;");
      } else {
        return (element.innerHTML = "0DIN");
      }
      break;
    case "header-right":
      if (content === "CALC") {
        return (element.innerHTML = "&#5837;&#5800;&#5850;&#5837;");
      } else {
        return (element.innerHTML = "CALC");
      }
      break;
    case "col1":
      if (content === "0DINS") {
        return (element.innerHTML = "&#5806;&#5841;&#5825;&#5822;&#5835;");
      } else {
        return (element.innerHTML = "0DINS");
      }
      break;
    case "col2":
      if (content === "CALCU") {
        return (element.innerHTML = "&#5837;&#5800;&#5850;&#5837;&#5794;");
      } else {
        return (element.innerHTML = "CALCU");
      }
      break;
    case "col3":
      if (content === "LATOR") {
        return (element.innerHTML = "&#5850;&#5800;&#5839;&#5806;&#5809;");
      } else {
        return (element.innerHTML = "LATOR");
      }
      break;
    case "col4":
      if (content === "MORTA") {
        return (element.innerHTML = "&#5847;&#5806;&#5809;&#5839;&#5800;");
      } else {
        return (element.innerHTML = "MORTA");
      }
      break;
    case "col5":
      if (content === "LSDOP") {
        return (element.innerHTML = "&#5850;&#5835;&#5841;&#5806;&#5832;");
      } else {
        return (element.innerHTML = "LSDOP");
      }
      break;
    case "col6":
      if (content === "EMDAS") {
        return (element.innerHTML = "&#5826;&#5847;&#5841;&#5800;&#5835;");
      } else {
        return (element.innerHTML = "EMDAS");
      }
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
