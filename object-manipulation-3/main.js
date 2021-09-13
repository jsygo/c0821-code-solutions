console.log('Lodash is loaded:', typeof _ !== 'undefined');

function addPlayers(playerNames) {
  var players = [];
  for (var playersIndex = 0; playersIndex < playerNames.length; playersIndex++) {
    players.push({ name: playerNames[playersIndex], hand: [] });
  }
  return players;
}

function createDeck() {
  var deck = [];

  var suits = ['clubs', 'diamonds', 'spades', 'hearts'];

  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'king', 'queen', 'ace'];

  // debugger;
  for (var suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
    for (var ranksIndex = 0; ranksIndex < ranks.length; ranksIndex++) {
      deck.push({ suit: suits[suitsIndex], rank: ranks[ranksIndex] });
    }
  }
  return deck;
}

// First i need helper functions for:
// dealing the cards
//    shuffling should be the first thing that happens in the game function
// calculating score and winner
// tiebreaker
// for shuffling cards

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
  for (var i = 0; i < player.hand.length; i++) {
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

// shuffle cards
// deal cards
// find winner
//    if there is more than one winner, deal one card to each and check for winner again
// once there is only one winner, console.log winner message

function runGame(playerNames, numOfCards) {
  var shuffledDeck = _.shuffle(createDeck());

  var players = addPlayers(playerNames);

  dealCards(players, shuffledDeck, numOfCards);

  var winners = findWinner(players);

  while (winners.length > 1) {
    dealCards(winners, shuffledDeck, 1);
    findWinner(winners);
  }

  for (var i = 0; i < players.length; i++) {
    console.log(`${players[i].name}'s score: ${players[i].score}.`);
  }
  console.log(`${winners[0].name} wins!`);
}

var playerNames = ['player 1', 'player 2', 'player 3', 'player 4'];

runGame(playerNames, 2);
