'use strict';

const Vector = function(x, y) {
  this.x = x;
  this.y = y;
  this.length = Math.hypot(x, y);
};

Vector.prototype.plus = function(vector) {
  if (vector instanceof Vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  else {
    return new TypeError(`${vector} is not a vector`);
  }
};

Vector.prototype.minus = function(vector) {
  if (vector instanceof Vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
  else {
    return new TypeError(`${vector} is not a vector`);
  }
};

module.exports = Vector;
