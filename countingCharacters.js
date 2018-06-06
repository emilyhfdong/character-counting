function countLetters(string) {
  var arrayOfStrings = string.split('');
  var letterCount = {};
  for (var i = 0; i < arrayOfStrings.length; i ++) {
    if (!letterCount[arrayOfStrings[i]] && arrayOfStrings[i] != ' ') {
      letterCount[arrayOfStrings[i]] = 1;
    } else if (arrayOfStrings[i] != ' '){
      letterCount[arrayOfStrings[i]] += 1;
    }

  }
  return letterCount
}

countLetters('lighthouse in the house');