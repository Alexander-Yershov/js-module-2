function getEvenNumbers(start, end) {
   // Change code below this line
  const array = [];

  for (let i = start; i <= end; i += 1) {   

    if (i % 2 === 0) {
      array.push(i);
    }
  }

  return array;
    // Change code above this line
  }