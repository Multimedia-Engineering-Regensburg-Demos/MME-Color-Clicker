/*eslint-env browser */

import GameManger from "./game/GameManger.js";
import GameView from "./ui/GameView.js";
import ScoreView from "./ui/ScoreView.js";

function init() {
  ScoreView.setElement(document.querySelector("#score"));
  GameView.setElement(document.querySelector("#squares"));
  GameView.addEventListener("squareclicked", onSquareClicked);
  GameManger.addEventListener("gamestarted", onGameStarted);
  GameManger.addEventListener("levelcleared", onLevelCleared);
  GameManger.addEventListener("gamelost", onGameLost);
  GameManger.reset();
}

function renderState(level, score, squares) {
  ScoreView.renderScore(score);
  GameView.renderSquares(squares);
}

function onSquareClicked(event) {
  GameManger.checkClickedID(event.data.id);
}

function onGameStarted(event) {
  renderState(event.data.currentLevel, event.data.currentScore, event.data.squares);
}

function onLevelCleared(event) {
  renderState(event.data.currentLevel, event.data.currentScore, event.data.squares);
}

function onGameLost(event) {
  GameManger.reset();
}

init();