const functions = {
  randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  elementFromChar(legend, char) {
    if (char === ' ') {
      return null;
    }

    const element = new legend[char]();

    element.originChar = char;

    return element;
  },
  charFromElement(element){
    if (element === null) {
      return ' ';
    }
    else {
      return element.originChar;
    }
  }
};

module.exports = functions;
