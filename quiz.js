// quiz

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const operators = ["+", "-", "x", "/"];
const submitBtn = document.getElementById("submitBtn");
let arrResults = [];

questions.forEach((element) => {
  let random1 = Math.floor(Math.random() * 9) || Math.floor(Math.random() * 99);
  let random2 = Math.floor(Math.random() * 9) || Math.floor(Math.random() * 99);

  let randomOps = Math.floor(Math.random() * 3);

  element.innerText =
    random1 + " " + operators[randomOps] + " " + random2 + " " + "=";

  let result = results(random1, random2, operators[randomOps]);

  arrResults.push(result);
});

function results(n1, n2, operator) {
  switch (operator) {
    case "+":
      return n1 + n2;
      break;
    case "-":
      return n1 - n2;
      break;
    case "x":
      return n1 * n2;
      break;
    case "/":
      return n1 / n2;
      break;
    default:
      break;
  }
}

function checkAnswers(event) {
  event.preventDefault();
  answers.forEach((element, i) => {
    if (Number(element.value) === arrResults[i]) {
      return (element.style.color = "green");
    } else {
      return (element.style.color = "red");
    }
  });
}

// timer

const startMinute = 2;
let time = startMinute * 60;

const countdown = document.querySelector("p");

function updateCountdown() {
  if (time <= 0) {
    clearInterval(setCountdown);
  }
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  countdown.innerText = `${minutes}: ${seconds}`;
  time--;
}

updateCountdown();

const setCountdown = setInterval(updateCountdown, 1000);

// addEventListeners

submitBtn.addEventListener("click", (event) => checkAnswers(event));
