/**
 * @file hänga gubbe-spel
 * @author Zander Koch
 * @version 1.0
 */

// JavaScript

// Globala variabler
/**@type {String} valt ord för pågående runda */
let selectedWord;

/**@type {Element[]} array av referenser till bokstavsrutespanen */
let letterBoxes;

/**@type {Element} */
let hangmanImg;

/**@type {Number} nummer för aktuell bild (0-6) */
let hangmanImgNr;

/**@type {Element[]} referens till diven för meddelanden */
let msgElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
	
	wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
				"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
				"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];

	let letterbuttons = document.querySelectorAll("#letterButtons button");
    for(let button of letterbuttons){
        addListener(button, "click", guessLetter);
    }
    let startGameBtn = document.querySelector("#startGameBtn");
    addListener(startGameBtn, "click", startGame);

    hangmanImg = document.querySelector("#hangman");
    msgElem = document.querySelector("#message");

    /**@type {Number} loopvariabel */
    let i;
} // End init


/**
 * körs då användaren trycker på knapp "starta spelet", väljer slumpat ord.
 * uppdatera sedan gränssnitt
 * @version 1.0
 */
function startGame(){
    selectedWord = randomWord();
    console.log("selectedWord: " + selectedWord);
    showLetterBoxes();
    hangmanImg.src = "pics/h0.png";
    hangmanImgNr = 0;

}

/**
 * påkallas av startGame(), väljer slumpvalt ord från listan
 * @returns {String} a randomly chosen word from wordList[]
 * @version 1.0
 */
function randomWord(){
    let randomIndex = Math.floor(Math.random() * wordList.length - 2);
    return wordList[randomIndex];
}

/**
 * skriver ut ett meddelande beroende på manHanged
 * @param {Boolean} manHanged 
 */
function endGame(manHanged){

}

/**
 * lägger till spans i dokumentet baserat på valt ord
 */
function showLetterBoxes(){
    let newCode = "";
    let i;

    for(i = 0; i < selectedWord.length; i++){
        newCode +=  "<span>&nbsp;</span> ";
    }
    let target = document.querySelector("#letterBoxes");
    target.innerHTML = newCode;
    letterBoxes = document.querySelectorAll("#letterBoxes span");
}


/**
 * körs då användare trycker på bokstavsknapp, kollar bokstavs förekomst i valt
 * ord, om ja: lägg till i kända bokstäver, om inte: öka felgissningar.
 * updatera sedan gränssnitt
 */
function guessLetter(){
    let letter = this.value;
    console.log(letter);
    let i;
    let letterFound = false;
    let correctLettersCount = 0;
    

    for(i = 0; i < selectedWord.length; i++){
        if (letter == selectedWord.charAt(i)){
            letterBoxes[i].innerHTML = letter;
            letterFound = true;
        }
        if(letterBoxes[i].innerHTML != "&nbsp;"){
            correctLettersCount++;
        }
    }

    if(!letterFound){
        hangmanImgNr++;
        hangmanImg.src = "pics/h" + hangmanImgNr + ".png";
        if (hangmanImgNr == 6){
            endGame(true);
        }
    }
    else if(correctLettersCount == selectedWord.length){
        endGame(false);
    }

}

window.onload = init; // Se till att init aktiveras då sidan är inladdad

