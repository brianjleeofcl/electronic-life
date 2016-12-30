'use strict';

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

module.exports = Grid;
