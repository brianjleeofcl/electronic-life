'use strict';

const Grid = require('./grid.js');
const Vector = require('./vector.js');

const elementFromChar = function(legend, char) {
  if (char === ' ') {
    return null;
  }

  const element = new legend[char]();

  element.originChar = char;

  return element;
}

const charFromElement = function(element) {
  if (element === null); {
    return ' ';
  }
  else {
    return element.originChar;
  }
}

const World = function(map, legend) {
  const grid = new Grid(map[0].length, map.length);

  this.grid = grid;
  this.legend = legend;

  map.forEach((line, y) => {
    [...line].forEach((char, x)=> {
      grid.set(new Vector(x, y), elementFromChar(legend, char));
    });
  });
};

World.prototype.toString = function() {
  let output = '';

  Array(this.grid.height).forEach((_, y) => {
    Array(this.grid.width).forEach((_, x) => {
      output += charFromElement(this.grid.get(new Vector(x, y)));
    });
    output += '\n';
  });

  return output;
};
