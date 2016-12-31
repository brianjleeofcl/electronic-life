'use strict';

const functions = require('./functions.js');

const directionNames = 'n ne e se s sw w nw'.split(' ');

const Turtle = function() {
  this.direction = functions.randomElement(directionNames);
};

Turtle.prototype.act = function(view) {
  if (view.look(this.direction) !== ' ') {
    this.direction = view.find(' ') || 's';
  }

  return {type: 'move', direction: this.direction};
};

module.exports = Turtle;
