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
    console.log("chosenWord: " + chosenWord);
}

/**
 * påkallas av startGame(), väljer slumpvalt ord från listan
 * @returns {String} a randomly chosen word from wordList[]
 * @version 1.0
 */
function randomWord(){
    let randomIndex = Math.floor(Math.random() * wordList.length - 1);
    return wordList[randomIndex];
}

/**
 * skriver ut ett meddelande beroende på manHanged
 * @param {Boolean} manHanged 
 */
function endGame(manHanged){
    
}


/**
 * körs då användare trycker på bokstavsknapp, kollar bokstavs förekomst i valt
 * ord, om ja: lägg till i kända bokstäver, om inte: öka felgissningar.
 * updatera sedan gränssnitt
 */
function guessLetter(){
    let letter = this.value;
    console.log(letter);

}

window.onload = init; // Se till att init aktiveras då sidan är inladdad

