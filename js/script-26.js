function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let price of order) {
    total += price;
  }

  // Change code above this line
  return total;
}