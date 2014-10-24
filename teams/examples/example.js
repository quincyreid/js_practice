var Team = require('../lib/teams');
var Person = require('../lib/person');


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

var Jessie = new Person(
  'Jessie',
  'male'
);

QTeam.addPerson(Q);
QTeam.addPerson(D);
QTeam.addPerson(Jessie);
QTeam.removePerson('Q');

console.log(QTeam);
