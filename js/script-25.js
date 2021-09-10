function getCommonElements(array1, array2) {
  // Change code below this line
const array3 = [];
  for (const identic of array1){
    if (array2.includes(identic)){
      array3.push(identic);
    }
  }
return array3;

 // Change code above this line
}