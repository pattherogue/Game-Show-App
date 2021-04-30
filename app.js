const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
let missed = 0;

//Hide start screen overlay
buttonReset.addEventListener('click', () => {
    overlay.style.display = "none";
});

const phrases = [
    "today is a great day",
    "you are amazing",
    "great things are coming your way",
    "you are something special",
    "coding is life"
]