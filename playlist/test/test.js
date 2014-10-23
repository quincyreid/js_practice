var assert = require("assert"); // node.js core module
var Playlist = require('../lib/playlist.js');

describe('Playlist', function(){
  it('constructor is present', function(){
    assert.equal(typeof Playlist, 'function');
  })

  it('instance variables are set', function(){
    var name = 'name';
    var playlist = new Playlist(name);

    assert.equal(playlist.name, name);

  })

  it('add songs', function(){
    var playlist = new Playlist('name');
    var song = 'Star Wars';
    playlist.addSong(song);
    assert.equal(playlist.songs.indexOf(song), 0);
  })

  it('list songs', function(){


    var playlist = new Playlist('name');
    var list = [ 'Star Wars', 'NY State of Mind', 'The Protest' ];
    for (i=0; i<list.length; i++){
      playlist.addSong(list[i]);
    }
    console.log(playlist.listSongs([1]));
  })

  it('play songs', function(){
    var playlist = new Playlist('name');

    var song = 'Star Wars';

    playlist.addSong(song);
    assert.equal(playlist.playSong(), song);

  })
})
