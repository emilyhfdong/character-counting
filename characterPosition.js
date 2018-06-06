function countLetters(string) {
  var arrayOfStrings = string.split('');
  var letterCount = {};
  for (var i = 0; i < arrayOfStrings.length; i ++) {
    if (!letterCount[arrayOfStrings[i]] && arrayOfStrings[i] != ' ') {
      letterCount[arrayOfStrings[i]] = [i];
    } else if (arrayOfStrings[i] != ' '){
      letterCount[arrayOfStrings[i]].push(i);
    }

  }
  return letterCount
}

console.log(countLetters('lighthouse in the house'));