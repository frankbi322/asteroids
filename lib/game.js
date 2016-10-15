const Asteroid = require('./asteroid.js')
const Ship = require('./ship.js')


function Game(height,width) {
  this.DIM_Y = height
  this.DIM_X = width
  this.NUM_ASTEROIDS = 20
  this.asteroids = []
  this.addAsteroids()
  let x = this.DIM_X*Math.random()
  let y = this.DIM_Y*Math.random()
  this.ship = new Ship([x,y],this)
}
Game.prototype.addAsteroids = function(){
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    let x = this.DIM_X*Math.random()
    let y = this.DIM_Y*Math.random()
    this.asteroids.push(new Asteroid([x,y],this))
  }
}
// 
// Game.prototype.addShip = function(){
//     let x = this.DIM_X*Math.random()
//     let y = this.DIM_Y*Math.random()
//     this.ship = new Ship([x,y],this)
// }


Game.prototype.draw = function(ctx){
  ctx.clearRect(0,0,this.DIM_X,this.DIM_Y)
  this.asteroids.forEach(el => el.draw(ctx))
  this.ship.draw(ctx)
}

Game.prototype.wrap = function(pos){
  return [(pos[0]+this.DIM_X)%this.DIM_X, (pos[1]+this.DIM_Y)%this.DIM_Y]
}

Game.prototype.checkCollisions = function(){
  // for (let i = 0; i < this.asteroids.length; i++) {
  //   for (var j = i; j < this.asteroids.length;j++) {
  //     if (this.asteroids[i].isCollidedWith(this.asteroids[j])){
  //       this.remove(j)
  //       this.remove(i)
  //     }
  //   }
  // }

}

Game.prototype.remove = function(idx){
  this.asteroids.splice(idx,1)
}



Game.prototype.step = function(){
  this.moveObjects()
  this.checkCollisions()
}

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(el => el.move())
}

g = new Game(100,200);

module.exports = Game;
