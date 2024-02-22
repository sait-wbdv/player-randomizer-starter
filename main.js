"use strict";

// TODO: consider renaming in relation to the querySelector variables
const players = [{name: "newt", turnPosition: null }, {name: "ripley", turnPosition: null}, {name: "apone", turnPosition: null}, {name: "hicks", turnPosition: null}];

// TODO: Set in local storage memory (for saving game status)
let turnOrder = []

// TODO: make 86 not a static number
function getRandomInteger() {
  return Math.round(Math.random() * 86)
}

// NOTE: players.length is good for new player adding features
let nextPlayer = getRandomInteger() % players.length;


// TODO: Handle possible errors for the arguments
function validatePlayer(currentPlayer, listOfPlayers) {
  if (!listOfPlayers.includes(currentPlayer)) {
    return true
  }
}

// TODO: Test more reslient to bugs implementations of this
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

// TODO: Change naming conventions to include El and note type of btn
const playerList = document.querySelector("#players-list")
const btn = document.querySelector("#random-player-btn")
const turnOrderList = document.querySelector("#player-turn-order")

const createPlayerCard = (player) => {
  // TODO: Add error handling to validate shape of object passed into the function
  return `<li>Name: ${player.name}</li>`
}

const addPlayerCards = (players) => {
  // TODO: Validate players array and throw error if incorrect
  players.forEach(player => {
    playerList.innerHTML += createPlayerCard(player)
  })
}

// TODO: Can this be done at the same time as variable declaration?
addPlayerCards(players)


function renderTurnOrder () {
  // set the turn order
  setTurnOrder()
  // TODO: Extract logic to support error handling better
  let sortedPlayers = players.sort((a,b) => a.turnPosition - b.turnPosition)
  turnOrderList.innerHTML = '';

  sortedPlayers.forEach(player => {
    turnOrderList.innerHTML += createPlayerCard(player)
  })
}
// TODO: update btn name
btn.addEventListener("click", renderTurnOrder)