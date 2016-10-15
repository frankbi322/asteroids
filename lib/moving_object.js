const Game = require('./game.js')

function MovingObject(options){
  this.pos = options.pos
  this.vel = options.vel
  this.radius = options.radius
  this.color = options.color
  this.game = options.game
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color
  ctx.beginPath();

  ctx.arc(
    this.pos[0], //x coord of center of circle
    this.pos[1], //y coord of center of circle
    this.radius, //radius
    0, //starting angle
    2*Math.PI, //ending angle, these default to full circle
    false //counterclockwise? nah
  );
  ctx.fill(); //fills in circle with color
}

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0]
  this.pos[1] += this.vel[1]
  this.pos = this.game.wrap(this.pos)
}

MovingObject.prototype.isCollidedWith = function(otherObject){
  if (this === otherObject) {
    return false
  }
  let a = Math.pow((this.pos[0] - otherObject.pos[0]),2)
  let b = Math.pow((this.pos[1] - otherObject.pos[1]),2)
  let distance = Math.sqrt(a + b)
  return distance < (this.radius + otherObject.radius)
}


module.exports = MovingObject;
