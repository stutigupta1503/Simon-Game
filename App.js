let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "blue"];
let level = 0;
let started = false;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function() {
    if(started == false) {
        console.log("Game has started")
        started = true;
        LevelUp();
    }
})

function flashBtn(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}

function LevelUp() {
    level++;
    h2.textContent = `Level ${level}`;

    let randomIndex = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIndex];
    let randomBtn = document.querySelector(`.${randomColor}`);
    console.log(randomIndex);
    console.log(randomColor);

    flashBtn(randomBtn);

}
