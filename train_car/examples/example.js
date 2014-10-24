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
  'steph',
  'female'
);

var max = new Person(
  'max',
  'male'
);


firstCar.addPerson(quincy);
firstCar.addPerson(steph);
firstCar.addPerson(anna);
firstCar.addPerson(dezz);
firstCar.addPerson(max);
console.log(firstCar);
