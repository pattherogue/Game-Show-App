const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

//Hide start screen overlay
buttonReset.addEventListener('click', () => {
    overlay.style.display = "none";
});

const phrases = [
    "Today is a great day",
    "Tou are amazing",
    "Great things are coming your way",
    "You are something special",
    "Coding is life"
]

 
