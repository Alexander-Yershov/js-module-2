function findLongestWord(string) {
  // Change code below this line
  const strSplit = string.split(" ");
  let longestWord = strSplit[0];
  
  for (let i = 0; i < strSplit.length; i += 1){
    if (strSplit[i].length > longestWord.length){
      longestWord = strSplit[i];
    }
  }
return longestWord;

  // Change code above this line
}
console.log(findLongestWord("DevTools failed to load source map"))