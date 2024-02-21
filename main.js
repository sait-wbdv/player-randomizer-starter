"use strict";

// DONE: get players
const players = [{name: "newt", turnPosition: null }, {name: "ripley", turnPosition: null}, {name: "apone", turnPosition: null}, {name: "hicks", turnPosition: null}];

// DONE: set turn order
let turnOrder = [ ]

// DONE: generate a random number
function getRandomInteger() {
  return Math.round(Math.random() * 86)
}
// TODO: get the remainder from that number divided by the number of players
let nextPlayer = getRandomInteger() % players.length;

// TODO: Make sure no repeat players are added
function validatePlayer(currentPlayer, listOfPlayers) {
  if (!listOfPlayers.includes(currentPlayer)) {
    return true
  }
}

// TODO: add players to the turn order
function setTurnOrder() {
  while(turnOrder.length < players.length) {
    let nextPlayer = getRandomInteger() % players.length;
    if (validatePlayer(nextPlayer, turnOrder)) {
    turnOrder.push(nextPlayer)
    }
  }
}
setTurnOrder()
console.log(turnOrder)