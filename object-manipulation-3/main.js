console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [];
for (var playersIndex = 0; playersIndex < 4; playersIndex++) {
  players.push({ name: `player${playersIndex + 1}`, hand: [] });
}

var deck = [];

for (var deckIndex = 0; deckIndex < 52; deckIndex++) {
  deck.push({ rank: '', suit: '' });
  if (deckIndex < 13) {
    deck[deckIndex].suit = 'clubs';
    if (deckIndex < 9) {
      deck[deckIndex].rank = deckIndex + 2;
    } else if (deckIndex === 9) {
      deck[deckIndex].rank = 'jack';
    } else if (deckIndex === 10) {
      deck[deckIndex].rank = 'queen';
    } else if (deckIndex === 11) {
      deck[deckIndex].rank = 'king';
    } else if (deckIndex === 12) {
      deck[deckIndex].rank = 'ace';
    }
  } else if (deckIndex < 26) {
    deck[deckIndex].suit = 'diamonds';
    if (deckIndex < 22) {
      deck[deckIndex].rank = deckIndex - 11;
    } else if (deckIndex === 22) {
      deck[deckIndex].rank = 'jack';
    } else if (deckIndex === 23) {
      deck[deckIndex].rank = 'queen';
    } else if (deckIndex === 24) {
      deck[deckIndex].rank = 'king';
    } else if (deckIndex === 25) {
      deck[deckIndex].rank = 'ace';
    }
  } else if (deckIndex < 39) {
    deck[deckIndex].suit = 'spades';
    if (deckIndex < 35) {
      deck[deckIndex].rank = deckIndex - 24;
    } else if (deckIndex === 35) {
      deck[deckIndex].rank = 'jack';
    } else if (deckIndex === 36) {
      deck[deckIndex].rank = 'queen';
    } else if (deckIndex === 37) {
      deck[deckIndex].rank = 'king';
    } else if (deckIndex === 38) {
      deck[deckIndex].rank = 'ace';
    }
  } else {
    deck[deckIndex].suit = 'hearts';
    if (deckIndex < 48) {
      deck[deckIndex].rank = deckIndex - 37;
    } else if (deckIndex === 48) {
      deck[deckIndex].rank = 'jack';
    } else if (deckIndex === 49) {
      deck[deckIndex].rank = 'queen';
    } else if (deckIndex === 50) {
      deck[deckIndex].rank = 'king';
    } else if (deckIndex === 51) {
      deck[deckIndex].rank = 'ace';
    }
  }
}
// First i need helper functions for:
// dealing the cards
//    shuffling should be the first thing that happens in the game function
// calculating score and winner

// for shuffling cards

var shuffledDeck = _.shuffle(deck);

function dealCards(players, deck, numOfCards) {
  for (var i = 0; i < players.length; i++) {
    for (var j = 0; j < numOfCards; j++) {
      var currentCard = deck.shift();
      players[i].hand.push(currentCard);
    }
  }
}

// add score property to each player
// loop through each players hand
//    if card is a number, add that value to score
//    if it is not, and it is not an ace, add 11
//    otherwise, add 11

function getScore(player) {
  player.score = 0;
  debugger;
  for (var i = 0; i < player.hand; i++) {
    if (typeof player.hand[i].rank === 'number') {
      player.score += player.hand[i].rank;
    } else if (player.hand[i].rank !== 'ace') {
      player.score += 10;
    } else {
      player.score += 11;
    }
  }
}

// create an array for the winner(s)
// create a variable for the highest score which starts at zero
// find the sum of all the cards values in each players hand
// assign that value to a new property of each player: score
// check each players score
// if it is higher than highestScore, change highestScore to the value of that players score
//    replace the player in the winners array with that player
// if it is equal to highestScore, add that player to the winners array

function findWinner(players) {
  var winners = [];
  var highestScore = 0;
  // debugger;
  for (var i = 0; i < players.length; i++) {
    getScore(players[i]);
    if (players[i].score > highestScore) {
      highestScore = players[i].score;
      winners = [];
      winners.push(players[i]);
    } else if (players[i].score === highestScore) {
      winners.push(players[i]);
    }
  }
  return winners;
}

dealCards(players);
findWinner(players);

// shuffle cards
//
