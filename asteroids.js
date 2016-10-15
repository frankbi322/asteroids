const GameView = require('./lib/game_view.js')

const canvasEl = document.getElementsByTagName("canvas")[0];
canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;
console.log(canvasEl.height);
console.log(canvasEl.width);
new GameView(
  canvasEl.height,
  canvasEl.width,
  canvasEl.getContext("2d")
).start(canvasEl);
