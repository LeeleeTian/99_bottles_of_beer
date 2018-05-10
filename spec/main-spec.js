'use strict';

const main = require('../main/main');

describe('99 bottles of beer', function() {
  it('return song given 0 bottle of beer', function() {
    let result = main(0).trim();
    let expected = `
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`.trim();
    expect(result).toEqual(expected)
  });
  it('return song given 1 bottle of beer', function() {
    let result = main(1).trim();
    let expected = `
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`.trim();
    expect(result).toEqual(expected)
  });
  it('return song given 3 bottles of beer', function() {
    let result = main(2).trim();
    let expected = `
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`.trim();
    expect(result).toEqual(expected)
  });
  it('return song given 6 bottles of beer', function() {
    let result = main(6).trim();
    let expected = `
6 bottles of beer on the wall, 6 bottles of beer.
Take one down and pass it around, 5 bottles of beer on the wall.
5 bottles of beer on the wall, 5 bottles of beer.
Take one down and pass it around, 4 bottles of beer on the wall.
4 bottles of beer on the wall, 4 bottles of beer.
Take one down and pass it around, 3 bottles of beer on the wall.
3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.
2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.
1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`.trim();
    expect(result).toEqual(expected)
  });
});
