'use strict';

const randomElement = function(array) {
  return array[Math.floor(Math.random() * array.length)];
};

const directionNames = 'n ne e se s sw w nw'.split(' ');

const Critter = function() {
  this.direction = randomElement(directionNames);
};

Critter.prototype.act = function(view) {
  if (view.look(this.direction) !== ' ') {
    this.direction = view.find(' ') || 's';
  }

  return {type: 'move', direction: this.direction};
};

module.exports = Critter;
