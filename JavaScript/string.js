function reverseString() {
    // Get the input value
    const inputString = document.getElementById('inputText').value;
    
    // Reverse the string
    const reversedString = inputString.split('').reverse().join('');
    
    // Display the reversed string
    document.getElementById('result').textContent = 'Reversed String: ' + reversedString;
  }

  function reverseWords() {
    // Get the input sentence
    const sentence = document.getElementById('inputText').value;
    
    // Split the sentence into words, reverse each word, and join them back
    const reversedWords = sentence.split(' ')
                                  .map(word => word.split('').reverse().join(''))
                                  .join(' ');
    
    // Display the result
    document.getElementById('result').textContent = 'Reversed Words: ' + reversedWords;
  }
  