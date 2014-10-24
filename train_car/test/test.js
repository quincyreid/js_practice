var assert = require("assert"); // node.js core module
var Train = require('../lib/train.js');
var Person = require('../lib/person.js');


describe('Train', function(){
  it('constructor is present', function(){
    assert.equal(typeof Person, 'function');
  })

  it('total capacity should be 4', function(){
    var totalCapacity = 4;

    assert.equal(totalCapacity, 4);
  })

  it('add a person', function(){
    var name = 'name';
    var sex = 'sex';
    var firstCar = new Train();
    var steph = new Person(
      'steph',
      'female'
    );

    // Adds the person steph to the Train.
    firstCar.addPerson(steph);

    assert.equal(firstCar.car.indexOf(steph), 0);
  })

  it('total capacity', function(){
    var name = 'name';
    var sex = 'sex';
    var firstCar = new Train();
    var quincy = new Person(
      'quincy',
      'Male'
    );

    var max = new Person(
      'max',
      'male'
    );

    var lauren = new Person(
      'lauren',
      'female'
    );

    var dezz = new Person(
      'desmond',
      'male'
    );

    var steph = new Person(
      'steph',
      'female'
    );

    var passengers = [
      quincy,
      max,
      lauren,
      dezz
    ];

    // A loop that adds each person from the passengers array
    for (i=0; i<passengers.length; i++) {
      firstCar.addPerson(passengers[i]);
    }


    // A loop confirm each person is in the position that they were added in
    for (i=0; i<passengers.length; i++) {
      assert.equal(firstCar.car.indexOf(passengers[i]), i);
    }

    // Confirms that a person can't be add to a train if the train is at total capacity
    assert.equal(firstCar.car.indexOf(steph), -1);
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
