const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

function Asteroid(pos,game) {
  MovingObject.call(this,{pos:pos, vel:Util.randomVec(), radius:30, color:"#00FF00", game:game})
}
Util.inherits(Asteroid,MovingObject)
//
// Asteroid.prototype.collideWith(otherObject) {
//   if (otherObject === this.game.ship) {
//     this.game.ship.relocate()
//   }
//
// //   for (let i = 0; i < this.asteroids.length; i++) {
// //     for (var j = i; j < this.asteroids.length;j++) {
// //       if (this.asteroids[i].isCollidedWith(this.asteroids[j])){
// //         this.remove(j)
// //         this.remove(i)
// //       }
// //     }
// //   }
// }


module.exports = Asteroid;
