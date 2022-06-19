const squares = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const score = document.getElementById("score");
const tom1 = new Audio("Fluffing-a-Duck.mp3");
const tom2 = new Audio("punch.wav");
const tom3 = new Audio("end.mp3");
const tom4 = new Audio("miss.wav");

let result = 0;
let hitPosition;
let curretTime = 60;
let timerId = null;

function music() {
  tom1.play();

  document.getElementById("start").style.opacity = "0";
  document.getElementById("start").setAttribute("id", "book");

  function randomSquare() {
    squares.forEach((square) => {
      square.classList.remove("mole");
    });
    score.textContent = result;

    let randomSquare = squares[Math.floor(Math.random() * 9)];

    hitPosition = randomSquare.id;
    randomSquare.classList.add("mole");
  }

  squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
      if (square.id == hitPosition) {
        tom2.play();
        result++;

        score.textContent = result;
        hitPosition = null;
        score.classList.toggle("point1");
        setTimeout(function () {
          score.classList.toggle("point1");
        }, 300);

        square.classList.toggle("zole");
        setTimeout(function () {
          square.classList.toggle("zole");
        }, 300);
      } else {
        tom4.play();
      }
    });
  });

  function moveMole() {
    timerId = setInterval(randomSquare, 600);
  }
  moveMole();

  function countDown() {
    curretTime--;

    timeLeft.textContent = curretTime;
    if (curretTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      tom1.pause();
      tom1.currentTime = 0;
      document.getElementById("gameOver").style.display = "flex";

      squares.forEach((square) => {
        square.style.opacity = "0";

        tom3.play();
        tom4.setAttribute("src", "none");
      });
    }
  }
  let countDownTimerId = setInterval(countDown, 1000);
}
function reload() {
  location.reload();
}
