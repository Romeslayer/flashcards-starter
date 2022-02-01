const expect = require('chai').expect;
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

  it.skip('should be a function', () => {
    const round = new Round();
    expect(Round).to.be.a('function');
  });

  it.skip('should be an instance of Round', () => {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });

  it.skip('should store a guess', () => {
    const round = new Round('opal');
    expect(round.guess).to.be.equal('opal');
  });

  it.skip('should also store a Deck', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);
    expect(round.deck).to.be.equal(deck);
  });

  it.skip('should be able to return the current card being played', () => {
    const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const card2 = new Card(2, 'What allows you to define a set of related information using indecies?', ['object', 'array', 'function'], 'array');
    const card3 = new Card(3, 'What allows you to use a block of code multiple times?', ['object', 'array', 'function'], 'function');
    const cards = [card1, card2, card3];
    const deck = new Deck(cards);
    const round = new Round('object', deck);
    expect(round.returnCurrentCard()).to.deep.equal(deck.cards[0]);
  });
});