// Unused math functions from step 1
const add = function (arr) {
  return arr.reduce((last, next) => last + next, 0);
};

const subtract = function (arr) {
  return arr.reduce((last, next) => last - next);
};

const multiply = function (arr) {
  return arr.reduce((last, next) => last * next, 1);
};

const divide = function (arr) {
  return arr.reduce((last, next) => last / next);
};

// Elements
const powerButton = document.querySelector(".power-button");
const odin = document.querySelector(".odin");
const headers = document.querySelectorAll(".header");
const runes = document.querySelectorAll(".runes");
const keyButtons = document.querySelectorAll(".calculator-keys button");
const onlyOne = document.querySelector("#there-can-be-only-one");
const checkmark = document.querySelector(".checkmark");
const checkmarkTxt = document.querySelector(".checkmark-txt");
const decimalKey = document.querySelector(".decimal");
const creditsLinks = document.querySelectorAll(".credits a");
const appName = document.querySelector(".app-name");
// Audio Files
const thunder = new Audio("audio/distant-thunder.mp3");
const lightning = new Audio("audio/lightning.mp3");
const whoosh = new Audio("audio/whoosh.mp3");
const impact = new Audio("audio/impact-thunder.mp3");
const thrum = new Audio("audio/low-thrum.mp3");
thrum.loop = true;
const laugh = new Audio("audio/odin-laugh.mp3");

// Constants
const powerOnMsg = "Great ODIN's Beard! Have You Tried Turning It On, Mortal?\nYou See That Big Round Thing At The Top?";
const lengthMsg = "There Shall Be No More Than Thirteen Characters In These Halls, Human. Hit Backspace, Clear Or Equals!";
const divideZeroMsg = "Odin Frowns Upon Thy Feeble Attempt To Divide By Zero And Become A God.\nBegone, Spawn Of Midgaaard!";
const arrayMismatchMsg = "Don't You Know How Simple Math Works, Mortal? Number, Operator, Number, Etc.";
const negativeNumMsg = "Don't Be So Negative, Human!\nNegative Numbers Are Not Allowed Here... Unless The Are Created By ODIN CALC, Of Course.";
const hasMultiDecimalMsg = "ODIN Decrees That No More Than One Decimal Per Number Shall Be Allowed, Spawn Of Lodurr.\nA Reset Be Upon Thee!";
const onlyOneMsg = "By Hoenir's Ghost! Uncheckth The Checkboxth Below If Thee Desiresth More Dethimals. But, Beware. There Shall Be Only One!!! (um, in each number)";
// Variables
let screen = document.querySelector(".calculator-screen");
let inputStr = "";
let powerOn = false;

// Toggle #there-can-be-only-one styles
onlyOne.addEventListener("click", e => {
  if (!powerOn) {
    e.preventDefault(); // prevent check
    alert(powerOnMsg);
    return;
  }
  checkmark.classList.toggle("magic-bg");
  checkmarkTxt.classList.toggle("magic-txt");
  // toggle disabled
  decimalKey.disabled = true ? (decimalKey.disabled = false) : (decimalKey.disabled = true);
});

// Toggle .power-on styles
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
  runes.forEach(rune => {
    rune.classList.toggle("firey-txt");
    toggleText(rune);
  });
  keyButtons.forEach(button => {
    button.classList.toggle("magic-pulse");
  });
  creditsLinks.forEach(link => {
    link.classList.toggle("firey-txt");
  });
  appName.classList.toggle("magic-txt");
  // If onlyOne is checked during power off, clear it
  if (onlyOne.checked) {
    onlyOne.checked = false;
    checkmark.classList.toggle("magic-bg");
    checkmarkTxt.classList.toggle("magic-txt");
    // toggle disabled
    decimalKey.disabled = true ? (decimalKey.disabled = false) : (decimalKey.disabled = true);
  }
});

// Loop key buttons and add event listeners
keyButtons.forEach(button => {
  // For each one we add a 'click' listener based on className
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
    case "decimal":
      button.addEventListener("click", () => {
        if (!powerOn) {
          alert(powerOnMsg);
          return;
        }
        if (screen.value.length >= 13) {
          alert(lengthMsg);
          return;
        }

        // if "onlyOne" is checked
        if (onlyOne.checked) {
          decimalKey.disabled = true; // disable decimal after one click
        }

        if (button.disabled) {
          button.classList.remove("magic-pulse");
        }

        // console.log("disabled: " + decimalKey.disabled);
        // if (screen.value.includes(".") && decimalKey.disabled == true) {
        //   console.log("trying to get here");
        //   //alert(onlyOneMsg);
        // }
        // console.log("checked: " + onlyOne.checked);

        whoosh.currentTime = 0; // reset audio on each click
        whoosh.play();
        display(button.value);
        inputStr += button.value;
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
        display(button.value);
        inputStr += button.value;
      });
  }
});

// Display
function display(value) {
  console.log(Object.prototype.toString.call(value));

  // All Clear
  if (value === "clear" || value.key === "Delete") {
    screen.value = "0";
    return;
  }
  // Backspace
  if (value === "backspace" || value.key === "Backspace") {
    screen.value = screen.value.slice(0, -1);
    return;
  }
  // Remove the default zero before evaluating
  if (screen.value === "0") screen.value = "";

  let displayValue = "";
  // Check for keyboard input
  if (value instanceof KeyboardEvent) {
    // Check for allowed characters
    if (value.key.match(/^(\d|\+|\-|\*|\/|\.)$/)) {
      //console.log(value.key);
      displayValue = value.key;
    }
  } else {
    displayValue = value;
  }

  // REF: https://www.toptal.com/designers/htmlarrows/math/
  // Javascript escape notation for a character in a quoted string is \uxxxx
  // where xxxx is four hexadecimal digits that specify the Unicode code number
  if (displayValue === "+") displayValue = "\u002B";
  if (displayValue === "-") displayValue = "\u2212";
  if (displayValue === "*") displayValue = "\u00D7";
  if (displayValue === "/") displayValue = "\u00F7";

  // Send displayValue to calculator screen
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
    case "runes-top":
      if (content === "•0DIN'S") {
        return (element.innerHTML = "&bull;&#5806;&#5841;&#5825;&#5822;&apos;&#5835;");
      } else {
        return (element.innerHTML = "&bull;0DIN'S");
      }
      break;
    case "runes-right":
      if (content === "CALCULATOR") {
        return (element.innerHTML = "&#5837;&#5800;&#5850;&#5837;&#5794;&#5850;&#5800;&#5839;&#5806;&#5809;");
      } else {
        return (element.innerHTML = `CALCULATOR`);
      }
      break;
    case "runes-left":
      if (content === "MORTALS•DO") {
        return (element.innerHTML = "&#5847;&#5806;&#5809;&#5839;&#5800;&#5850;&#5835;&bull;&#5841;&#5806;");
      } else {
        return (element.innerHTML = "MORTALS&bull;DO");
      }
      break;
    case "runes-bottom":
      if (content === "•PEMDAS•") {
        return (element.innerHTML = "&bull;&#5832;&#5826;&#5847;&#5841;&#5800;&#5835;&bull;");
      } else {
        return (element.innerHTML = "&bull;PEMDAS&bull;");
      }
      break;
    default:
      return;
  }
}

// Toggle audio samples
function toggleAudio(audio) {
  return audio.paused ? audio.play() : audio.pause();
}

// Calculator functions
function operate(inputStr) {
  // Check for negative numbers, alert and reset
  const negativeNumRegex = new RegExp(/(?<!\d+)-\d+(\.\d+)|(?<!\d+)-\d+/, "gm");
  const hasNegative = negativeNumRegex.test(inputStr);
  if (hasNegative) {
    alert(negativeNumMsg);
    return 0; // reset the screen
  }

  // REGEX: (not used) match positive integers and decimals to one place.
  // /\d+(\.\d{1})|(\d+)/gm
  // REGEX: (not used) match positive integers and decimals, no limit on decimal
  // place. /\d+(\.\d+)|(\d+)/gm
  // REGEX: (not used) match positive/negative integers and decimals, no limit
  // on decimal place (limited to one place in output)
  // /(?<!\d+)-?\d+(\.\d+)|(?<!\d+)-?\d+/gm
  // REGEX: (used) match positive integers and decimals, no limit on decimal
  // place or number of decimals (limited to one place in output) \d+(\.\d+)+|(\d+)
  let numsArray = inputStr.match(/\d+(\.\d+)+|(\d+)/gm);

  // Check for multiple decimal places in each number
  const multiDecimalRegex = new RegExp(/(\..*){2,}/, "g");
  let hasMultiDecimal = [];
  numsArray.forEach(num => {
    hasMultiDecimal.push(multiDecimalRegex.test(num));
  });

  // If we found multiple decimal places, alert and reset
  if (hasMultiDecimal.includes(true)) {
    alert(hasMultiDecimalMsg);
    return 0; // reset the screen
  }

  // REGEX: match allowed operators
  // let opsArray = inputStr.match(/[\/\+\-\*]+/gm);

  // Remove the integers and decimals, make an array of what is left
  // NOTE: must use same regex as numsArray!
  let opsArray = inputStr.replace(/\d+(\.\d+)+|(\d+)/gm, "").split("");

  // Handy for testing
  // console.log("numsArray in operate(): " + numsArray);
  // console.log("opsArray in operate(): " + opsArray);
  // console.log("inputStr in operate(): " + inputStr);
  return evaluate(numsArray, opsArray);
}

// Assign operators based on incoming strings
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
        return 0; // reset the screen
      }
      return a / b;
    default:
      console.log("Unknown operator: " + operator);
      return;
  }
}

// Non-PEMDAS math evaluate function
function evaluate(numsArray, opsArray) {
  // Check for empty arrays
  if (!opsArray.length) {
    console.error("Error: opsArray is empty");
    return 0; // reset the screen
  }
  if (!numsArray.length) {
    console.error("Error: numsArray is empty");
    return 0;
  }
  // Require numsArray to have exactly one item more than opsArray
  if (opsArray.length + 1 != numsArray.length) {
    alert(arrayMismatchMsg);
    // console.log("Error: Array lengths mismatch");
    return 0;
  }
  // Begin with the first number
  let resultTally = numsArray[0];
  // We only need the index
  opsArray.forEach(function (_, index) {
    // Apply the operation to resultTally and the next number
    resultTally = operation(resultTally, opsArray[index], numsArray[index + 1])
      // Shorten to one decimal place, remove if zero
      .toFixed(1)
      .replace(/\.?0+$/, "");
  });
  return resultTally;
}

// Keyboard input event listener
window.addEventListener("keydown", e => {
  // slash = 191, ctrl = 17, shift = 16
  // REF: https://www.toptal.com/developers/keycode
  if (e.shiftKey || e.code == 191 || e.code == 17) {
    e.preventDefault();
  }
  if (!powerOn) {
    alert(powerOnMsg);
    return;
  }
  if (screen.value.length >= 13) {
    alert(lengthMsg);
    return;
  }
  // Send allowed characters to display
  if (e.key.match(/^(\d|\+|\-|\*|\/|\.|Delete|Backspace)$/)) {
    display(e);
  }
  // Add allowed characters to inputStr
  if (e.key.match(/^(\d|\+|\-|\*|\/|\.)$/)) {
    inputStr += e.key;
  }

  if (e.key === "Enter") {
    impact.currentTime = 0; // reset audio on each click
    impact.play();
    laugh.currentTime = 0;
    laugh.play();
    screen.value = operate(inputStr);
  }
});

// Mutation observer for .power-on class
// REF: https://medium.com/@prasannavaidya/how-to-detect-changes-to-the-dom-elements-classes-using-mutationobserver-javascript-e8e8cf09cd85
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
