function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let piece of numbers) {
    const number = piece;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}