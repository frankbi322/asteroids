const Game = require('./game.js')
const KeyMaster = require('./keymaster.js')
function GameView(height,width,ctx){
  this.game = new Game(height,width)
  this.ctx = ctx
}

GameView.prototype.start = function(){
  this.bindKeyHandlers()
  setInterval(ctx => {
    this.game.step()
    this.game.draw(this.ctx)
  },20)
}

GameView.prototype.bindKeyHandlers = function(){
  key('w',() => {
    debugger
    this.game.ship.power([0,-5])
  })
  key('a',function(){ this.game.ship.power([-5,0])})
  key('s',function(){ this.game.ship.power([0,5])})
  key('d',function(){ this.game.ship.power([5,0])})
}

module.exports = GameView;
