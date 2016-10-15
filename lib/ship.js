const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Ship(pos,game) {
  MovingObject.call(this,{pos:pos, vel:[0,0], radius:25, color:"#FF6a00", game:game})
}

Ship.prototype.relocate = function(){
  let x = this.game.DIM_X*Math.random()
  let y = this.game.DIM_Y*Math.random()
  this.pos[0] = x
  this.pos[1] = y
  this.vel = [0,0]
}

// Ship.prototype.collideWith = function(otherObject) {
//
// }

Ship.prototype.power = function(impulse){
  this.vel[0] += impulse[0]
  this.vel[1] += impulse[1]
}

Util.inherits(Ship,MovingObject)

module.exports = Ship;
