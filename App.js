let gameSeq = [];
let userSeq = [];

let level = 0;
let started = false;

let h2 = document.querySelector('h2');
document.addEventListener('keypress', function() {
    if(started == false) {
        console.log("Game has started")
        started = true;
        h2.textContent = "Level 1";
    }
})


