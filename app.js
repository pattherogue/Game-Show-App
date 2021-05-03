//Step 2 - Get Elements From HTML
const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const startBtn = document.querySelector(".btn__reset");
const overlay = document.getElementById("overlay");

let missed = 0;

//Step 3 - Hide Start Screen Overlay *RELOAD GAME*
startBtn.addEventListener("click", () => {
    if (startBtn.textContent === "Start Game") {
    overlay.style.display = "none";
    } else if (startBtn.textContent === "Play Again") {
        location.reload();
    }
});

//Step 4 - Create Phrases
const phrases = [
    "today is a great day",
    "you are amazing",
    "great things are coming your way",
    "you are something special",
    "coding is life"
]

//Step 5 - Random Phrase
const getRandomPhraseAsArray = arr => {
    //randomly choose phrase
    let random = Math.floor(Math.random() * arr.length);
    //split phrase into new array of characters
    arr[random].split("");
    //return new character array
    return arr[random];
}



//Step 6 - Game Display
const addPhraseToDisplay = arr => {
    for (let i = 0; i < arr.length; i++) {
         //create list li item
        const listItem = document.createElement("LI");
        //put the character inside of the list item
        listItem.textContent = arr[i];
        //append list item to the #phrase ul
        const ul = document.querySelector("#phrase ul");
        ul.appendChild(listItem)
        //letter or space
        if (arr[i] === " ") {
            listItem.className = "space";
        } else {
            listItem.className = "letter";
        }
    }
}

//Function Use
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray); 

//Step 7 - Check Letter
const checkLetter = button => {
     //store li elements in variable
    const liElements = document.querySelectorAll(".letter");
    //store variable if match is found
    let match = null;
    //loop through li elements
    for (let i = 0; i < liElements.length; i++) {
        if(button === liElements[i].textContent) {
            liElements[i].classList.add("show");
            match = true;
        }
    }
    //return match variale
    return match;
}

//Step 8 - Add Event Listener To Keyboard (Screen)
qwerty.addEventListener("click", e => {
    if(e.target.tagName === "BUTTON"){ 
        //add "chosen" class
        e.target.className = "chosen";
        e.target.disabled = true;
        //call checkLetter function and store results
        const letterFound = checkLetter(e.target.textContent);
        //remove img and incrememnt "missed" counster

        //Step 9 - Count The Missed Guesses In Game
        if (letterFound === null) {
            document.querySelectorAll(".tries img")[missed].src = "images/lostHeart.png";
           missed++;
        }
        checkWin();
    }
});

//Step 10 - Create a checkWin Function
const checkWin = () => {
    //variale to store the li elements class name "letter"
    let letters = document.querySelectorAll(".letter");
    //variable to store li elements class name "show"
    let show = document.querySelectorAll(".show");
    //if length of two variables are same
    if (letters.length === show.length) {
        //create win overlay
        overlay.classList.add("win");
        //change headline to show person won
        overlay.firstElementChild.textContent = "You Win!";
        //change display property to "flex"
        overlay.style.display = "flex";
        startBtn.textContent = "Play Again";
      
        } else if (missed > 4) {
        //create lose overlay
        overlay.classList.add("lose");
        //change headline tos how person lost
        overlay.firstElementChild.textContent = "You Lose!";
        //change display property to "flex"
        overlay.style.display = "flex";
        startBtn.textContent = "Play Again";
     
    }
}

   
   