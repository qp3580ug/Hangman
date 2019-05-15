//Hangman by Nathan Walter
//a couple global variables
lettersUsed = []
var wrongAnswers = 0
var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")

function newGame(selectObject){
  var value = selectObject.value;
  //Checks which category is selected from the select box, each 'if' then pulls a random word
  if (value == 'Animals'){
    var animalWords = ["penguins", "lion", "dog", "cat"];
    var randomWord = animalWords[Math.floor(Math.random()*animalWords.length)];
    getElementsById(value, randomWord);
    blankOutWord(randomWord)
  }
  else if (value == 'Food'){
    var foodWords = ['pasta', 'burgers', 'steak', 'tacos'];
    var randomWord = foodWords[Math.floor(Math.random()*foodWords.length)];
    getElementsById(value, randomWord);
    blankOutWord(randomWord)
  }
  else if (value == 'Holidays'){
    var holidayWords = ['christmas', 'easter', 'thanksgiving', 'halloween'];
    var randomWord = holidayWords[Math.floor(Math.random()*holidayWords.length)];
    getElementsById(value, randomWord);
    blankOutWord(randomWord)
  }
  return randomWord;
}

function resetGame(){
  //This resets the page to start a new game
  window.location.reload();
}

function getElementsById(value, randomWord){
  //each of these update parts of the page making somethings dissappear, changes some text, makes other thing appear
  document.getElementById("hangmanTitle").innerHTML = "Your Category is " + value;
  document.getElementById("newGameButton").style.display = 'block';
  document.getElementById("selectBox").style.display = 'none';
  document.getElementById('selectLetter').style.display = 'block';
  document.getElementById('secretWord').innerHTML = randomWord;
  changeAutofocus()
}

function blankOutWord(randomWord){
  //This takes the word picked at random and makes each letter a dash
  blankWord = randomWord
  for (i = 0; i <= randomWord.length; i++){
      blankWord = blankWord.replace(randomWord[i], '-');
  }
  //then this makes the html paragraph into the blank word
  document.getElementById("selectedWord").innerHTML = blankWord;
  return blankWord;
}


function enterLetter(){
  changeAutofocus()
  var randomWord = document.getElementById("secretWord").innerHTML;
  var enteredLetter = document.getElementById("enteredLetter").value;
  var blankWord = document.getElementById('selectedWord').innerHTML;
  //Checks for if the entered chracter is a letter of the alphabet
  if (alphabetArray.indexOf(enteredLetter) != -1){
    lettersUsed.push(enteredLetter)
    //checks if the letter was used before
    if (lettersUsed.indexOf(enteredLetter) == -1){
      alert('You have already tried that letter!!')
    }
    //if character is a letter and has not been used then it does the following
    else{
      //This makes 2 arrays for later
      for (let i = 0; i <= randomWord.length; i++){
        var wordCharArray = randomWord.split('');
        var blankCharArray = blankWord.split('');
        }
      //checks if letter is in the word
      if (wordCharArray.indexOf(enteredLetter) != -1){
        for (let i = 0; i <= wordCharArray.length; i++){
          //if letter is in word the following replaces the dash for what the letter should be
          if (wordCharArray[i] === enteredLetter){
            blankCharArray.splice(i, 1, enteredLetter);
            document.getElementById('isIn').innerHTML =  enteredLetter + " is in the word!";
            wordWithLetter = blankCharArray.toString();
            for (i = 0; i <= wordWithLetter.length; i++){
              wordWithLetter = wordWithLetter.replace(',', '')
            }
            document.getElementById('selectedWord').innerHTML = wordWithLetter;
            //After every dash in the word is back to the proper letter this tells the user they won
            if (wordWithLetter === randomWord){
              document.getElementById('isIn').innerHTML = "Congrats!! You Won!!";
              document.getElementById('selectLetter').style.display = 'none';
            }
          }
        }
      }
      //if the letter is not in the word it does the follwing
      else{
        wrongAnswers += 1;
        //each of these updates the image of the hangman and adds 1 to the wrong answers variable
        if(wrongAnswers === 1){
          document.getElementById('hangmanImg').src = 'pictures/noose.png'
          document.getElementById('isIn').innerHTML = enteredLetter + ' is not in the word!'
        }
        if(wrongAnswers === 2){
          document.getElementById('hangmanImg').src = 'pictures/head.png'
          document.getElementById('isIn').innerHTML = enteredLetter + ' is not in the word!'
        }
        if(wrongAnswers === 3){
          document.getElementById('hangmanImg').src = 'pictures/body.png'
          document.getElementById('isIn').innerHTML = enteredLetter + ' is not in the word!'
        }
        if(wrongAnswers === 4){
          document.getElementById('hangmanImg').src = 'pictures/oneArm.png'
          document.getElementById('isIn').innerHTML = enteredLetter + ' is not in the word!'
        }
        if(wrongAnswers === 5){
          document.getElementById('hangmanImg').src = 'pictures/bothArms.png'
          document.getElementById('isIn').innerHTML = enteredLetter + ' is not in the word!'
        }
        if(wrongAnswers === 6){
          document.getElementById('hangmanImg').src = 'pictures/oneLeg.png'
          document.getElementById('isIn').innerHTML = enteredLetter + ' is not in the word!'
        }
        if(wrongAnswers === 7){
          document.getElementById('hangmanImg').src = 'pictures/bothLegs.png'
          document.getElementById('isIn').innerHTML = enteredLetter + ' is not in the word!'
        }
        //the final one then tells the user they lost
        if(wrongAnswers === 8){
          document.getElementById('hangmanImg').src = 'pictures/lost.png';
          document.getElementById('isIn').innerHTML = "Oh No! You Lost!";
          document.getElementById('selectLetter').style.display = 'none';      
        }
      }
    }
    //this updates the page to tell you what letter was used.
    document.getElementById('selectedLetter').innerHTML = "Letters Used: " + lettersUsed;

    
  }
  else {
    //if character is not a letter this tells the user to enter a letter
    alert('Please enter a Letter!!')
  }
  
  
}

function changeAutofocus() {
  //this makes the textbox for the letter the focus of the page during the game.
  document.getElementById("enteredLetter").focus();
}
