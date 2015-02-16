var Playlist = require('../lib/playlist');

var QuincysJams = new Playlist(
  'Quincys Jams',
  ['In the club','Temporary View']
);

var DesmondsJams = new Playlist(
  'Desmonds Jams',
  ['NY State of Mind']
);

QuincysJams.addSong('Day 5');
QuincysJams.addSong('Tip Towing In My Jordans');
QuincysJams.addSong('Star Wars');

QuincysJams.listSongs();

QuincysJams.playSong(true);


DesmondsJams.listSongs();
