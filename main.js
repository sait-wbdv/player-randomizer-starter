"use strict";

const players = [{name: "newt", turnPosition: null }, {name: "ripley", turnPosition: null}, {name: "apone", turnPosition: null}, {name: "hicks", turnPosition: null}];

let turnOrder = []

// GENERATE NUMBER
function getRandomInteger() {
  return Math.round(Math.random() * 86)
}

// SET NEXT PLAYER USING MODULO OF RANDOM NUMBER % NUMBER OF PLAYERS
let nextPlayer = getRandomInteger() % players.length;


// MAKE SURE THE PLAYER ISN'T ALREADY ADDED TO THE LIST OF PLAYERS
function validatePlayer(currentPlayer, listOfPlayers) {
  if (!listOfPlayers.includes(currentPlayer)) {
    return true
  }
}

// GENERATE A NEW TURN ORDER
function setTurnOrder() {
  turnOrder = []
  while(turnOrder.length < players.length) {
    let nextPlayer = getRandomInteger() % players.length;
    if (validatePlayer(nextPlayer, turnOrder)) {
      players[nextPlayer].turnPosition = turnOrder.length;
    turnOrder.push(nextPlayer)
    }
  }
}

// RENDER TO DOM LOGIC BELOW

// DOM ELEMENTS TO PASS INFO TO
const playerList = document.querySelector("#players-list")
const btn = document.querySelector("#random-player-btn")
const turnOrderList = document.querySelector("#player-turn-order")


// create a player list item element
const createPlayerCard = (player) => {
  return `<li>Name: ${player.name} </li>`
}

// ADD PLAYER CARDS TO THE LIST
const addPlayerCards = (players) => {
  // list through the players
  players.forEach(player => {
    // for each player add onne to the unorder list using the create player card function
    playerList.innerHTML += createPlayerCard(player)
  })
}

// set up the original list 
addPlayerCards(players)


// Render the turn order to the dom
function renderTurnOrder () {
  // set the turn order
  setTurnOrder()
  // sort the players based on their turn order
  let sortedPlayers = players.sort((a,b) => a.turnPosition - b.turnPosition)
  turnOrderList.innerHTML = '';
  // add the sorted list to the dom
  sortedPlayers.forEach(player => {
    turnOrderList.innerHTML += createPlayerCard(player)
  })
}
// Add event listener so it's clickable
btn.addEventListener("click", renderTurnOrder)