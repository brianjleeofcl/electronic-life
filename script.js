const World = require('./world.js');
const Turtle = require('./turtle.js');
const Wall = function() {};

const plan = ["############################",
"#      #    #      o      ##",
"#                          #",
"#          #####           #",
"##         #   #    ##     #",
"###           ##     #     #",
"#           ###      #     #",
"#   ####                   #",
"#   ##       o             #",
"# o  #         o       ### #",
"#    #                     #",
"############################"];
const world = new World(plan, {'#': Wall, 'o': Turtle});

for (let i = 0; i < 5; i++) {
  world.turn();
  console.log(world.toString());
}
