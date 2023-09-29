class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `This is a ${this.year} ${this.make} ${this.model}.`;
  }
}

class Tesla extends Car {
  constructor(model, year, range) {
    super("Tesla", model, year);
    this.range = range;
  }

  getDescription() {
    return `This is a ${this.year} ${this.make} ${this.model} with a range of ${this.range} miles.`;
  }
}
const myRide = new Car("Toyota", "Corolla", 2019);
const myTesla = new Tesla("Model S", 2019, 300);
console.log(myTesla.getDescription());
console.log(myRide.getDescription());
