'use strict';

const directions = require('./directions.js');
const functions = require('./functions.js');

const View = function(world, vector) {
  this.world = world;
  this.vector = vector;
}

View.prototype.look = function(dir) {
  const target = this.vector.plus(directions[dir]);

  if (this.world.grid.isInside(target)) {
    return functions.charFromElement(this.world.grid.get(target));
  } else {
    return '#';
  }
}

View.prototype.findAll = function(char) {
  const found = [];
  for (const dir in directions) {
    if (this.look(dir) === char) {
      found.push(dir);
    }
  }
  return found;
};

View.prototype.find = function(char) {
  const found = this.findAll(char);
  if (!found.length) {
    return null;
  }
  return functions.randomElement(found);
};
