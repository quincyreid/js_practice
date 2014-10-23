var Playlist = function(name) {
  this.name = name;
  this.songs = [];

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
    return song;
  }
};

module.exports = Playlist;
