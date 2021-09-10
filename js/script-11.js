function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
const messageArray = message.split(" ");
const messageLength = messageArray.length;
  const totalPrice = messageLength * pricePerWord;
  return totalPrice;


   // Change code above this line
}