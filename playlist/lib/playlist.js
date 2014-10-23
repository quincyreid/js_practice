var Playlist = function(name, songs) {
  this.name = name;
  this.songs = songs;


  // Function for listing songs from the playlist
  this.listSongs = function() {
    for (var i = 0; i<this.songs.length; i++) {
      console.log((i+1) + '. ' + this.songs[i]);
    }
  }

  // Function for adding a song to the playlist
  this.addSong = function(song) {
    this.songs.push(song);
  }

  // Function provides a condition for randomly selecting a song or moving to next song in the list
  this.playSong = function(random) {
    if (random === true) {
      var index = Math.floor((Math.random() * (this.songs.length)) + 0);
      var song = this.songs[index];
      this.songs.splice(index, 1);
      console.log('Shuffling...');
    }
    else {
      var song = this.songs.shift();
    }
    console.log('Now Playing: ' + song);
  }
};

module.exports = Playlist;
