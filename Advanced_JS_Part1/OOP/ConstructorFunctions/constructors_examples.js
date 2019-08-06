/**
 * A function constructor's purpose is to construct objects
    Capitalizing first letter of a constructor is a convention - best practice
 */
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// Creating two car objects via keyword new
var probe = new Car('Ford', 'Probe', 1993);
var cmax = new Car('Ford', 'C-Max', 2014);

probe.make;  // Returns "Ford"
cmax.year;   // Returns 2014

/**
 * new keyword does the following:
 * 1) An empty object is created
 * 2) The keyword THIS inside the constructor function refers to the empty object that was just created
 * 3) A RETURN THIS is added to the constructor function (this is why you don't need to explicitly return any value)
 * 4) An internal link is created between the object and the .prototype property on the constructor function. We can actually access this link on the object that is created: 
 * it is called __proto__, sometimes pronounced "dunder" (double underscore) proto.
 * 
 */


var car = new Car("Buatti", "Chiron", 2017);
car.__proto__ === Car.prototype // true

// Every single .prototype object has a property called constructor that points back to the original function
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.constructor === Person // true

/**
 * JS has prototypal inheritance
 * To borrow the functionality from one constructor and use it in another, we would use the CALL method
 */

 function Vehicle(make, model, year) {
     this.make = make;
     this.model = model;
     this.year = year;
 }

 function Motorcycle(make,model,year,motorcycleType) {
     Vehicle.call(this,make,model,year); // passing in THIS allows the Vehicle constructor to be applied on the MOTORCYCLE object
     this.motorcycleType = motorcycleType;
 }

 var moto = new Motorcycle("Kawasaki", "Ninja 500", 2006, "Sports")
