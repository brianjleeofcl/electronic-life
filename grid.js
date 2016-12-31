'use strict';

const Vector = require('./vector.js');

const Grid = function(width, height) {
  this.space = new Array(width * height);
  this.width = width
  this.height = height;
};

Grid.prototype.isInside = function(vector) {
  const xBool = vector.x >= 0 && vector.x < this.width;
  const yBool = vector.y >= 0 && vector.y < this.height;

  return xBool && yBool;
};

Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
};

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
};

Grid.prototype.forEach = function(f, context) {
  Array(this.height).forEach((_, y) => {
    Array(this.width).forEach((_, x) => {
      const value = this.space[x + y * this.width];

      if (value) {
        f.call(context, value, new Vector(x, y));
      }
    });
  });
}

module.exports = Grid;
