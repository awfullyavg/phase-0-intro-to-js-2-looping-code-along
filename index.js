// Code your solutions in this file
function writeCards(input) {
    const cards = [];
    for (let i = 0; i < input.length; i++) {
      const name = input[i]
      let message = `Thank you, ${name}, for the wonderful surprise gift!`
      cards.push(message);
    }
    return cards;
  }

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }