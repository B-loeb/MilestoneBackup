import Ball from "./ball.js";
import Paddle from "./paddle.js";
 const beginGame = document.getElementById("start")
 const ball = new Ball(document.getElementById("ball"));
 const playerPaddle = new Paddle(document.getElementById("player-paddle"));
 const computerPaddle = new Paddle(document.getElementById("computer-paddle"));
 const playerScoreElem = document.getElementById("player-score");
 const computerScoreElem = document.getElementById("computer-score");
 const winPoints = 2;
 
let lastTime;
 function update(time){
     if(lastTime != null){
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])
        computerPaddle.update(delta, ball.y)

        if (lost()) keepScore() 
     }

     lastTime = time
     window.requestAnimationFrame(update)
 }
    
function lost() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}

function keepScore() {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) +1
    }else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) +1
    }
    checkForWin()
}

function checkForWin(){
    const gameOver = false;
    if (computerScoreElem.textContent == winPoints){
        gameOver = true;
        winner = computerScoreElem.textContent
    }
    ball.reset();
    computerPaddle.reset();
}

 document.addEventListener("mousemove", e => {
     playerPaddle.position = (e.y / window.innerHeight) * 100
 })

 window.requestAnimationFrame(update)
 function start(){
    document.getElementById("activitySelector").addEventListener("change", addActivityItem, false);
    }

function addActivityItem(){
    //option is selected
    alert("yeah");
}
 window.addEventListener("load", start, false);