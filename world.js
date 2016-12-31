'use strict';

const Grid = require('./grid.js');
const Vector = require('./vector.js');
const View = require('./view.js');
const functions = require('./functions.js');

const World = function(map, legend) {
  const grid = new Grid(map[0].length, map.length);

  this.grid = grid;
  this.legend = legend;

  map.forEach((line, y) => {
    [...line].forEach((char, x)=> {
      grid.set(new Vector(x, y), functions.elementFromChar(legend, char));
    });
  });
};

World.prototype.toString = function() {
  let output = '';

  Array(this.grid.height).forEach((_, y) => {
    Array(this.grid.width).forEach((_, x) => {
      output += functions.charFromElement(this.grid.get(new Vector(x, y)));
    });
    output += '\n';
  });

  return output;
};

World.prototype.turn = function() {
  const completed = [];
  this.grid.forEach((turtle, vector) => {
    if (turtle.act && act.indexOf(turtle) === -1) {
      completed.push(turtle);
      this.letAct(turtle, vector);
    }
  }, this);
}

World.prototype.letAct = function(turtle, vector) {
  const action = turtle.act(new View(this, vector));

  if (action && action.type === 'move') {
    const dest = this.checkDestination(action, vector);

    if (dest && this.grid.get(dest) === null) {
      this.grid.set(vector, null);
      this.grid.set(dest, turtle);
    }
  }
}

World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    const dest = vector.plus(directions[action.direction]);

    if (this.grid.isInside(dest)) {
      return dest;
    }
  }
}

module.exports = World;
