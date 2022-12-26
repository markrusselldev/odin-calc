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

// elements
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
const thrum = new Audio("audio/low-thrum.mp3");
thrum.loop = true;
const laugh = new Audio("audio/odin-laugh.mp3");

// constants
const powerOnMsg = "Have You Tried Turning It On, Mortal?\nDo You See That Big Round Thing At The Top?";
const lengthMsg = "There Shall Be No More Than Thirteen Characters In These Halls, Human. Hit Backspace, Clear Or Equals!";
const divideZeroMsg = "Odin Frowns Upon Thy Feeble Attempt To Divide By Zero And Become A God.\nBegone, Spawn Of Midgaaard!";
const arrayMismatchMsg = "Don't You Know How Simple Math Works, Mortal? Number, Operator, Number, Etc.";
const negativeNumMsg = "Don't Be So Negative, Human!\nNegative Numbers Are Not Allowed Here... Unless The Are Created By ODIN CALC, Of Course.";
// variables
let screen = document.querySelector(".calculator-screen");
let inputStr = "";
let powerOn = false;

// toggle "power on" styles
powerButton.addEventListener("click", () => {
  thunder.currentTime = 0; // reset audio on each click
  thunder.play();
  thrum.currentTime = 0; // reset audio on each click
  toggleAudio(thrum);
  odin.classList.toggle("power-on");
  powerButton.classList.toggle("power-on");
  screen.classList.toggle("golden-txt");
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
    button.classList.toggle("magic-pulse");
  });
});

// loop key buttons and add event listeners
keyButtons.forEach(button => {
  // for each one we add a 'click' listener based on className
  switch (button.className) {
    case "all-clear":
      button.addEventListener("click", () => {
        if (!powerOn) {
          alert(powerOnMsg);
          return;
        }
        impact.currentTime = 0; // reset audio on each click
        impact.play();
        display("clear");
        inputStr = "";
      });
      break;
    case "backspace":
      button.addEventListener("click", () => {
        if (!powerOn) {
          alert(powerOnMsg);
          return;
        }
        impact.currentTime = 0; // reset audio on each click
        impact.play();
        display("backspace");
        inputStr = inputStr.slice(0, -1);
      });
      break;
    case "equal-sign":
      button.addEventListener("click", () => {
        if (!powerOn) {
          alert(powerOnMsg);
          return;
        }
        impact.currentTime = 0; // reset audio on each click
        impact.play();
        laugh.currentTime = 0;
        laugh.play();
        screen.value = operate(inputStr);
      });
      break;
    default:
      button.addEventListener("click", () => {
        if (!powerOn) {
          alert(powerOnMsg);
          return;
        }
        if (screen.value.length >= 13) {
          alert(lengthMsg);
          return;
        }
        whoosh.currentTime = 0; // reset audio on each click
        whoosh.play();
        if (screen.value !== "0" || screen.value !== "") {
          inputStr += screen.value + button.value;
        }
        inputStr += button.value;
        display(button.value);
      });
  } // end switch
});

// display
function display(value) {
  if (value === "clear") {
    screen.value = "0";
    return;
  }

  if (value == "backspace") {
    screen.value = screen.value.slice(0, -1);
    return;
  }

  if (screen.value === "0") screen.value = "";
  // https://www.toptal.com/designers/htmlarrows/math/
  // javascript escape notation for a character in a quoted string is \uxxxx
  // where xxxx is four hexadecimal digits that specify the Unicode code number
  let displayValue = value;
  if (value === "+") displayValue = "\u002B";
  if (value === "-") displayValue = "\u2212";
  if (value === "*") displayValue = "\u00D7";
  if (value === "/") displayValue = "\u00F7";

  screen.value += displayValue;
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

function toggleAudio(audio) {
  return audio.paused ? audio.play() : audio.pause();
}

// main functions
function operate(inputStr) {
  // Check for negative numbers
  const negativeNumRegex = new RegExp(/(?<!\d+)-\d+(\.\d+)|(?<!\d+)-\d+/, "gm");
  const hasNegative = negativeNumRegex.test(inputStr);
  if (hasNegative) {
    alert(negativeNumMsg);
    return 0;
  }

  // match positive integers and decimals to one place /\d+(\.\d{1})|(\d+)/gm
  // match positive integers and decimals, no limit on decimal place /\d+(\.\d+)|(\d+)/gm
  // match positive/negative integers and decimals, no limit on decimal place (limited to one place in output) /(?<!\d+)-?\d+(\.\d+)|(?<!\d+)-?\d+/gm
  let numsArray = inputStr.match(/\d+(\.\d+)|(\d+)/gm);

  // match allowed operators
  // let opsArray = inputStr.match(/[\/\+\-\*]+/gm);

  // remove the numbers/decimals, make an array of what is left
  let opsArray = inputStr.replace(/\d+(\.\d+)|(\d+)/gm, "").split("");
  console.log("numsArray in operate(): " + numsArray);
  console.log("opsArray in operate(): " + opsArray);
  console.log("inputStr in operate(): " + inputStr);
  return evaluate(numsArray, opsArray);
}

// assign operators based on incoming strings
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
        alert(divideZeroMsg);
        return "0"; // return "0" to reset screen
      }
      return a / b;
    default:
      console.log("Unknown operator: " + operator);
      return;
  }
}

// non-PEMDAS math evaluate function
function evaluate(numsArray, opsArray) {
  // check for missing or empty arrays
  if (!opsArray.length) {
    alert("ops array empty");
    return "0"; // return "0" to reset screen
  }
  if (!numsArray.length) {
    alert("ops array empty" + numsArray);
    return "0"; // return "0" to reset screen
  }
  // require numsArray to have exactly one item more than opsArray
  if (opsArray.length + 1 != numsArray.length) {
    alert(arrayMismatchMsg);
    // console.log("Error: Array lengths mismatch or one or both are empty");
    return "0"; // return "0" to reset screen
  }
  // begin with the first number
  let resultTally = numsArray[0];
  // we only need the index
  opsArray.forEach(function (_, index) {
    // apply the operation to resultTally and the next number
    resultTally = operation(resultTally, opsArray[index], numsArray[index + 1])
      // shorten to one decimal place, remove if zero
      .toFixed(1)
      .replace(/\.?0+$/, "");
  });

  // Reset inputStr, numsArray and opsArray
  inputStr = "";
  numsArray = [];
  opsArray = [];

  return resultTally;
}

// Mutation observer for .power-on class
// based on: https://medium.com/@prasannavaidya/how-to-detect-changes-to-the-dom-elements-classes-using-mutationobserver-javascript-e8e8cf09cd85
var elemToObserve = document.querySelector(".power-button");
var prevClassState = elemToObserve.classList.contains("power-on");
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.attributeName == "class") {
      var currentClassState = mutation.target.classList.contains("power-on");
      if (prevClassState !== currentClassState) {
        prevClassState = currentClassState;
        if (currentClassState) {
          console.log("class added!");
          powerOn = true;
        } else {
          console.log("class removed!");
          powerOn = false;
        }
      }
    }
  });
});
observer.observe(elemToObserve, { attributes: true });
