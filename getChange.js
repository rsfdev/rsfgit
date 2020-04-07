const getChange = (payable, paid) => {
  let coins = [200, 100, 50, 20, 10, 5, 2, 1];
  let change = [];
  let length = coins.length;
  let remaining = paid - payable; // we reduce this below

  if (paid < payable) throw new Error('paid value is not enough')

  for (let i = 0; i < length; i++) { // loop through array of notes & coins:
    let coin = coins[i];

    let timesCoinFits = Math.floor(remaining / coin); // no partial coins
    if (timesCoinFits >= 1) { // check coin fits into the remaining amount

      for (let j = 0; j < timesCoinFits; j++) { // add coin to change x times
        change.push(coin);
        remaining = remaining - coin;  // subtract coin from remaining
      }
    }
  }
  return change;
}
