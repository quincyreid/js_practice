var assert = require("assert"); // node.js core module
var Team = require('../lib/teams.js');
var Person = require('../lib/person.js');


describe('Team', function(){
  it('constructor is present', function(){
    assert.equal(typeof Team, 'function');
  })

  it('instance variables are present', function(){
    var name = 'name';
    var mascot = 'mascot';

    var squad = new Team(name, mascot);
    console.log(squad.mascot);

    // Confirms instance variables, name and mascot, are present
    assert.equal(squad.name, name);
    assert.equal(squad.mascot, mascot);
  })

  it('add person', function(){
    var name = 'name';
    var mascot = 'mascot';
    var sex = 'sex';
    var squad = new Team(name, mascot);
    var dezz = new Person(
      'dezz',
      'male'
    );

    // Adds the person dezz to the Team roster.
    squad.addPerson(dezz);

    // Confirms person was added by checking the position in the array the new person would appear
    assert.equal(squad.roster.indexOf(dezz), 0);
  })

  it('remove a person', function(){
    var name = 'name';
    var mascot = 'mascot';
    var sex = 'sex';
    var squad = new Team(name, mascot);
    var dezz = new Person(
      'dezz',
      'male'
    );

    // Confirms a person can be removed from the Team roster by adding and then removing person. Test is checked against the size of the roster.
    squad.addPerson(dezz);
    squad.removePerson('dezz');
    assert.equal(squad.roster.length, 0);
  })
})

describe('Person', function(){
  it('constructor is present', function(){
    assert.equal(typeof Person, 'function');
  })

  it('instance variables are present', function(){
    var name = 'name';
    var sex = 'sex';

    var person = new Person(name, sex);

    // Confirms instance variables, name and sex, are present
    assert.equal(person.name, name);
    assert.equal(person.sex, sex);
  })
})
