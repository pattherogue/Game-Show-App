const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startBtn = doucment.getElementByClassName('btn_reset');

let missed = 0;

const phrases = [
    "Today is a great day",
    "Tou are amazing",
    "Great things are coming your way",
    "You are something special",
    "Coding is life"
]

//Hide start screen overlay
startBtn.addEventListener('click', () => {
    overlay.style.display = "none";
});

//Step 5 - Random Phrase
function getRandomPhraseAsArray(arr) {
    //randomly choose phrase
    let random = Math.floor(Math.random() * arr.length);
    //split phrase into new array of characters
    arr[random].split("");
    //return new character array
    return arr[random];
}

//Step 6 - Game Display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
         //create list li item
        let listItem = document.createElement('li');
        //put the character inside of the list item
        listItem.textContent = arr[i];
        //append list item to the #phrase ul
        const ul = document.querySelector('#phrase ul');
        //letter or space
        if (arr[i] !== " ") {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
        ul.appendChild(listItem)
    }
}

//Function Use
const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

//Step 7 - Check Letter
function checkLetter(button) {
     //store li elements in variable
    const liElements = document.querySelectorAll('.letter');
    //store variable if match is found
    let match = null;
    //loop through li elements
    for (let i = 0; i < liElements.length; i++) {
        if(button === liElements[i].textContent) {
            liElements[i].classList.add('show');
            match = button
        }
    }
    //return match variale
    return match;
}

//Step 8 - Add Event Listener To Keyboard (Screen)
qwerty.addEventListener('click', e => {
    if(e.target.tagName === "BUTTON"){ 
        //add "chosen" class
        e.target.className = 'chosen';
        e.target.disabled = true;
        //call checkLetter function and store results
        const letterFound = checkLetter(e.target.textContent);
        //remove img and incrememnt "missed" counster
        if (letterFound === null) {
            let img = document.querySelector('#scoreboad img');
            img.remove();
            missed++
        }
        checkWin();
    }
});
   
   