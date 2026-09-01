let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "blue"];
let level = 0;
let started = false;
let body = document.querySelector('body');
let scores = [0];

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function() {
    if(started == false) {
        started = true;
        LevelUp();
    }
})

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 150);
}

function LevelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    flashBtn(randomBtn);
}

function checkAns(index) {
    if(userSeq[index] === gameSeq[index]) {
        if(index == gameSeq.length -1) {
            setTimeout(LevelUp,1000);
        }
    } else {
        scores.push(level-1);
        let max = Math.max(...scores);
        h2.innerHTML = `Game Over! Your Score was <b>${level-1}</b> <br>Highest Score is <b>${max}</b> <br> Press any key to restart`;
        body.classList.add("bgRed");
        setTimeout(function() { 
            body.classList.remove("bgRed");
        },300);
        reset();
    }
}

  
function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    flashBtn(btn);
    checkAns(userSeq.length-1)
}

let buttons = document.querySelectorAll(".btn");
for(btn of buttons) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


