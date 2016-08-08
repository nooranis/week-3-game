
/*
PSUDO CODE: 
1) Press any key to start
	-this will trigger a randomly selected word from array to display with dashes
	-Score div displays 
	-Box for discarded letters display
2) show array of words to spell out 
3) Choose a word from array at random
4) Display following on page: 
	-dashes for word (done with css and js? )
		-wordChosen.length to show number of dashes? 
	-number of attempts remaining
		-wordChosen.length + 5 to show number of attempts 
	-discard box:
		-shows all incorrect attempted letters 
	-Correct letters on dashes (or in place of dashes) 
3) if/else for each key entered for word
	-easier? 
		-if (letterThatIsCorrect) > place it in on the correct dash area
			-how does it know which dash it should go onto? 
			-can this be done by index? _ _ _  = index0, index1, index2
				-if letterA > replace index0 with A? 
		-else (anyOtherLetter) > place it in box for discarded letters and remove one attempt
4) Correct within attempts remaining
	-alert('you win!'); 
	-win score: +1 
	-trigger new word with dashes 
	-clear out used letters field
	-start attempts over (word.length + 5)
5) Incorrect with no attempts remaining: 
	-alert('you lose!');
	-lose score: +1 
	-trigger new word with dashes 
	-clear out used letters field 
	-start attempts over (word.length + 5)

NOTICE: 
1) Get core of game done 
2) Add theme
3) Add word with repeated letters 
4) Add sound for correct/incorrect 
*/


//word bank to choose from randomly 
var someNames = ['slow', 'shack', 'bears', 'cat', 'pail', 'trample'];

//valid letters to enter 
var validLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] 

//displays wins, losses and attempts 
var wins = 0;
var lost = 0; 
var attempt = someNames.length + 5; //this may be wrong. Want to get length of a word from someNames and add 5 (ex: Slow == 9)

//press any key to start, should trigger a random word from someNames array.
//should NOT generate a new word any time a key is pressed after there is a word available to guess 
document.onkeyup = function(randomWord) {
	var randomWord = someNames[Math.floor(Math.random)]; 
}

//display random word as dashes 
//found on stackoverflow, did search for "display word as dashes javascript"
function dashDisplay(someNames) {
	var display = ""; 
	
	for (var i=0), i < word.length; i++) {
		display = display + "_";
	}

	return display;
}
