function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
const newArray = firstArray.concat(secondArray);
const arrayLength = newArray.length;
  if (arrayLength > maxLength){
    return newArray.slice(0,maxLength);
  }
  return newArray;


    // Change code above this line
  }