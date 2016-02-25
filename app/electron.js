const remote = require('remote');
const app = remote.require('electron').app;
const fs = remote.require('fs');

readJson = function() {
  data.game = JSON.parse(fs.readFileSync(__dirname+'/game/game.json', 'utf8'));
};

readJson();
