QUnit.test( "blank out the word", function( assert ) {
    randomWord = 'halloween'
    blankWord = randomWord
    blanks = '---------'
    for (i = 0; i <= randomWord.length; i++){
      blankWord = blankWord.replace(randomWord[i], '-');
    }
    assert.equal( blankWord, blanks, "the function should change the word halloween to all dashes" );
  });

QUnit.test( "expecting -1 because not in array", function( assert ){
    assert.expect(-1)
    var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
    enteredLetter = 4
    notIn = alphabetArray.indexOf(enteredLetter)

    assert.equal(notIn, -1, "4 is not in the alphabet array")
});

Qunit.test( "expect -1 because no entry is not in array", function( assert ){
    assert.expect(-1)
    var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
    enteredLetter = ''
    notIn = alphabetArray.indexOf(enteredLetter)

    assert.equal( notIn, -1, "nothing in the input should be caught")
});

Qunit.test( "too many letters entered", function( assert ){
    assert.expect(-1)
    var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("")
    enteredLetter = 'as'
    notIn = alphabetArray.indexOf(enteredLetter)

    assert.equal( notIn, -1, "should be equal because more than one letter shoudl not work")
});

Qunit.test( "check if person has won", function( assert ){
    randomWord = 'halloween'
    blankCharArray = ['-', 'a', 'l', 'l', 'o', 'w', 'e', 'e', 'n']
    enteredLetter = 'h'
    blankCharArray.splice(i, 1, enteredLetter)
    wordWithLetter = blankCharArray.toString();
    for (i = 0; i <= wordWithLetter.length; i++){
        wordWithLetter = wordWithLetter.replace(',', '')
    }

    assert.equal(randomWord, wordWithLetter, 'both varaibles should be halloween')

})