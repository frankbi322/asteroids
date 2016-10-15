const Util = {
  inherits (childClass, parentClass) {
    function Surrogate() {}
    Surrogate.prototype = parentClass.prototype
    childClass.prototype = new Surrogate()
    childClass.prototype.constructor = Surrogate
  },

  randomVec() {
    return [(15*Math.random()-5),(15*Math.random()-5)]
  }
}




module.exports = Util;
