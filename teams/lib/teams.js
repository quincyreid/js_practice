var Team = function(name, mascot){
  this.name = name;
  this.mascot = mascot;
  this.roster = [];
  // Add person to team

  this.addPerson = function(person){
    this.roster.push(person);
  }

  // Remove person from team
  this.removePerson = function(name){
    for(i=0; i<this.roster.length; i++){
      if (name == this.roster[i].name){
        this.roster.splice(i, 1);
      }

    }
  }
}

module.exports = Team;
