/*
    Any function or propert added to the prototype is shared among ALL instances linked to that prototype (Example: sayHello is SHARED among ALL Person instances)
    Each constructor function has its own prototype:
        An obj that can have methods and properties placed on it. These methods and props can be shared
        among ALL objects that is created by that constructor function when the new keyword is used
*/

function Person(name) {
    this.name = name;
}

var time = new Person("tim");

Person.prototype; // Object {} should only have constructor and prototype as attributes

// adding a function to the prototype
Person.prototype.sayHello = function() {
    return "Hello, " + this.name;
}

// Any Person object that will be created or WAS created in the past has access to the function
var moxie = new Person("Moxie");
moxie.sayHello();  // returns "Hello, Moxie"

// Notice that sayHello still works for tim even though tim was created
// before the sayHello function was added to the prototype.
tim.sayHello();    // returns "Hello, Tim"

Person.prototype.siblings = ["Haim", "David"];

// the intention is for elie to have an array of siblings BUT since the prototype is shared among all instances of a Person, any other instance will also have access to the same siblings array
var elie = new Person("Elie");

elie.siblings.push("Tamar"); // returns the new length of the array => 3
// The siblings array will now be ["Haim", "David", "Tamar"]

var anotherPerson = new Person("Mary");

anotherPerson.siblings.push("Leslie");
elie.siblings; // ["Haim", "David", "Tamar", "Leslie"]

/*

Constructor Function Best Practices
The best practices for creating constructor functions in JavaScript are:

1) All of the properties that you do not want to be shared go inside of the constructor function
2) All properties that you want to be shared go on the prototype. Almost all of the time, you will want to put functions on the prototype.
This saves memory space!
*/

function Person(name) {
    this.name = name;
    this.siblings = []; // each object will have their own siblings
}

var janey = new Person("Janey");
janey.silbings.push("Annie");

var tim = new Person("Tim");
tim.siblings.push("Nicole");
tim.siblings.push("Jeff");
tim.siblings.push("Greg");
tim.siblings; // Returns ["Nicole", "Jeff", "Greg"];

// BEST PRACTICE!! Always put function definitions on the constructor function's prototype
function Person(name) {
    this.name = name;
 }
 
 Person.prototype.sayHi = function() {
     return "Hello, " + this.name;
 }

 // JS Property Lookup
 /**
  * When you attempt to access a property on an object in JavaScript, there is a lookup process that goes on in order to find your property. 
  * To find the value for a property, first the properties on the object are checked. 
  * If the property is not found, then the properties on the prototype of the constructor function are checked. 
  */

 function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    if (year !== undefined) {
        this.year = year;
    }
}

Automobile.prototype.year = 2016;

var newCar = new Automobile("Ferrari", "488 Spider");

// In this case, we did not pass in a year,
// so it was never set in the constructor function
newCar.hasOwnProperty("year"); // Returns false

newCar.year; // returns 2016

// Now, if we create a car with a year, the property on the car object will be seen first in the property lookup:

var probe = new Automobile("Ford", "Probe", 1993);

probe.hasOwnProperty("year"); // returns true

probe.year; // returns 1993
