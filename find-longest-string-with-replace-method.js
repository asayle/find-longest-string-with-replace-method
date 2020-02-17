// challenge: given a string of words, return the length of the longest word

function longestWordLength (str) {
    // use regEx to remove all non-word characters with replace function
     var stringWithoutSpecialCharacters = str.replace(/\W/g, ' ');
    //   declare variable 'longestWord and set it equal to an empty string
      var longestWord = '';
    // declare a variable 'wordArray' and use split method to create an array of words
      var wordArray = stringWithoutSpecialCharacters.split(' ');
    // create a for loop to loop through wordArray
      for (var i = 0; i < wordArray.length; i++){
    // create a conditional to ask if the length of current item in the array is '>' than
    // longestWord.length
      if (wordArray[i].length > longestWord.length) {
       longestWord = wordArray[i];
      } 
      }
    // set longestWord to current item being looped over in the array
      return longestWord.length;
    }
    
    console.log(longestWordLength('Hi, where is the airport?'));
    console.log(longestWordLength('Thanks for stopping by!'));