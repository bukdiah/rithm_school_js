// Prototype Inheritance

function Automobile(make, model, year) {
    this.make = make;
    this.model = model;
    if (year !== undefined) {
        this.year = year;
    }
}

Automobile.prototype.year = 2016;
var probe = new Automobile("Ford", "Probe", 1993);

probe.hasOwnProperty("year"); // returns true --> comes from Object prototype

probe.year; // returns 1993

// Inspect the returned object in the console
// It shows us the prototype associated with the instance of Automobile
// You should see the constructor function and a property for year
probe.__proto__;

// Inspect the returned object in the terminal
// It shows us the parent prototype (Object's prototype) that is associated
// with the instance of Automobile
// You should see many properties here, including hasOwnProperty!
probe.__proto__.__proto__;

// Click through the returned object to see the __proto__ chain.
console.dir(probe);
//================================================================================

// Creating your own inheritance chain
function Parent(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Parent.prototype.sayHi = function(){
    return this.firstName + " " + this.lastName + " says hi!";
}

function Child(firstName, lastName){
    // This is how we "inherit" properties from the parent
    Parent.apply(this,arguments);
}

// This is how we inherit functions
// (create a new prototype + reset the constructor)
/*
 We've set the prototype of the Child to be a newly created object with a prototype of Parent.prototype 
 (Object.create accepts as a parameter another object to set as the prototype).
*/
Child.prototype = Object.create(Parent.prototype);

/**
 * Without this line, if you examine Child.prototype.constructor, it will refer
 * to the Parent and not the Child!
 */
Child.prototype.constructor = Child;

var c = new Child("Bran", "Stark");

c.sayHi() // Bran Stark says hi!

// THIS IS BAD

Child.prototype = Parent.prototype;

// true - this is BAD!
Child.prototype === Parent.prototype;

// When we assign objects equal to each other, they are just references
// so if we add to the Child.prototype, objects created from the Parent.prototype will have access to them!

/*
THIS IS GOOD

Child.prototype = Object.create(Parent.prototype);

// false - This is GOOD! We want these to be different
Child.prototype === Parent.prototype;
*/
/*
BAD PRACTICE: Using new to create a child class
You may see inheritance done by using the new keyword instead of using Object.create. This will do almost the same thing, 
but add additional unnecessary properties on the prototype (since it is creating an object with undefined properties just for the prototype).
*/