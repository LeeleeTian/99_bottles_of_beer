'use strict';

function formBottle(num, str) {
  return (num == 1)? '1 bottle' : (num == 0)? `${str} more bottles` : `${num} bottles`;
};

function format(a, b) {
  return `${formBottle(a, 'No')} of beer on the wall, ${formBottle(a, 'no')} of beer.\n`
    + ((b != -1)? `Take one down and pass it around, ${formBottle(b, 'no')} of beer on the wall.\n`
    : `Go to the store and buy some more, 99 bottles of beer on the wall.`);
};

function printSong(amountArray) {
  return amountArray.reduce((song, amount) => {
    song += format(amount, amount - 1);
    return song;
  }, '');
};

function splitToArray(beerAmount) {
  return [...Array(beerAmount+1).keys()].reverse();
};

module.exports = function main(beerAmount) {
  var amountArray = splitToArray(beerAmount)
  return printSong(amountArray);
};
