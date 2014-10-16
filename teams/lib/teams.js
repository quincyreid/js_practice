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
      console.log(this.roster[i]);
    }
  }
}

var Person = function(name, sex){
  this.name = name;
  this.sex = sex;
}

var QTeam = new Team(
  'Destroyers',
  'Masta Killa'
);

var Q = new Person(
  'Q',
  'male'
);

var D = new Person(
  'Dezz',
  'male'
);

QTeam.addPerson(Q);
QTeam.addPerson(D);
QTeam.removePerson(Q);

// console.log(QTeam);
