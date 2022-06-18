
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.getElementById("score")             
const tom1 = new Audio('Fluffing-a-Duck.mp3');
const tom2 = new Audio("pop.mp3")
const tom3 = new Audio("end.mp3")
const tom4 = new Audio("miss.mp3")

let result = 0
let hitPosition
let curretTime = 30
let timerId = null

function music(){
    tom1.play()
         
         document.getElementById("start").style.opacity = "0"
         document.getElementById("start").setAttribute("id", "book")
    
   function randomSquare(){
    squares.forEach(square => {
        square.classList.remove("mole")
    })
    score.textContent = result
    
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add("mole")
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id  == hitPosition) {
             tom2.play()
            result++
           
            score.textContent = result
            hitPosition = null
        }
        else{tom4.play()}

    })
})

function moveMole(){
    timerId = setInterval(randomSquare, 600)
     
}
moveMole()

function countDown(){
    curretTime--

    timeLeft.textContent = curretTime
    if(curretTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        tom1.pause();
        tom1.currentTime = 0;
        document.getElementById("gameOver").style.display="flex"
        squares.forEach(square => {
            square.style.opacity=("0")
            tom3.play()
        })
    }
}
let countDownTimerId = setInterval(countDown, 1000)
  
}
function reload(){
    location.reload()
}


