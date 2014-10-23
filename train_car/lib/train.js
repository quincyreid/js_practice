var Train_Car = function(seat) {
  this.seat = seat;
  this.car = [];


  // Add people to train
  this.addPerson = function(person){
    this.car.push(person);
  }


  // Check number of people on the train
  this.removeSeat = function(seat){
    this.seat -= 1;
  }

// When a person is added to the train, take a seat away



//Check if trains full to go onto the next train.
}

var Person = function(name, sex){
  this.name = name;
  this.sex = sex;
}

var firstCar = new Train_Car(5);

var quincy = new Person(
  'quincy',
  'Male'
);

var anna = new Person(
  'anna',
  'female'
);

var dezz = new Person(
  'desmond',
  'male'
);

var steph = new Person(
  'Steph',
  'female'
);


firstCar.addPerson(quincy);
firstCar.addPerson(steph);
firstCar.removeSeat(1);
firstCar.removeSeat(1);
console.log(firstCar);
