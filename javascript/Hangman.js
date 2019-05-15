lettersUsed = []
var wrongAnswers = 0
var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")

function newGame(selectObject){
  var value = selectObject.value;
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
  window.location.reload();
}

function getElementsById(value, randomWord){
  document.getElementById("hangmanTitle").innerHTML = "Your Category is " + value;
  document.getElementById("newGameButton").style.display = 'block';
  document.getElementById("selectBox").style.display = 'none';
  document.getElementById('selectLetter').style.display = 'block';
  document.getElementById('secretWord').innerHTML = randomWord;
  changeAutofocus()
}

function blankOutWord(randomWord){
  blankWord = randomWord
  for (i = 0; i <= randomWord.length; i++){
      blankWord = blankWord.replace(randomWord[i], '-');
  }
  document.getElementById("selectedWord").innerHTML = blankWord;
  return blankWord;
}

function enterLetter(){
  changeAutofocus()
  var randomWord = document.getElementById("secretWord").innerHTML;
  var enteredLetter = document.getElementById("enteredLetter").value;
  var blankWord = document.getElementById('selectedWord').innerHTML;
  lettersUsed.push(enteredLetter)
  if (alphabetArray.indexOf(enteredLetter) != -1){
    if (lettersUsed.indexOf(enteredLetter) == -1){
      alert('You have already tried that letter!!')
    }
    else{
      for (let i = 0; i <= randomWord.length; i++){
        var wordCharArray = randomWord.split('');
        var blankCharArray = blankWord.split('');
        }
      if (wordCharArray.indexOf(enteredLetter) != -1){
        for (let i = 0; i <= wordCharArray.length; i++){
          if (wordCharArray[i] === enteredLetter){
            blankCharArray.splice(i, 1, enteredLetter);
            document.getElementById('isIn').innerHTML =  enteredLetter + " is in the word!";
            wordWithLetter = blankCharArray.toString();
            for (i = 0; i <= wordWithLetter.length; i++){
              wordWithLetter = wordWithLetter.replace(',', '')
            }
            document.getElementById('selectedWord').innerHTML = wordWithLetter;
            if (wordWithLetter === randomWord){
              document.getElementById('isIn').innerHTML = "Congrats!! You Won!!";
              document.getElementById('selectLetter').style.display = 'none';
            }
          }
        }
      }
      else{
        wrongAnswers += 1;
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
        if(wrongAnswers === 8){
          document.getElementById('hangmanImg').src = 'pictures/lost.png';
          document.getElementById('isIn').innerHTML = "Oh No! You Lost!";
          document.getElementById('selectLetter').style.display = 'none';      
        }
      }
    }
    document.getElementById('selectedLetter').innerHTML = "Letters Used: " + lettersUsed;

    
  }
  else {
    alert('Please enter a Letter!!')
  }
  
  
}

function changeAutofocus() {
  document.getElementById("enteredLetter").focus();
}
