var Train = function(name) {
  totalCapacity = 4;
  this.car = [];


  // Add people to train
  this.addPerson = function(person){
    if (this.car.length < totalCapacity){
      this.car.push(person);
    } else {
      console.log("This train car is full, try the next car");
    }
    return this.car;
  }
}

module.exports = Train;
