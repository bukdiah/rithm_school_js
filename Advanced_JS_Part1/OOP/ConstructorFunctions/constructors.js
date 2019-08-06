//1) What is the purpose of a constructor function?

// ANSWER: To create objects

//2) What does the new keyword do?
    /*
    ANSWER:
       1) Creates an empty object
       2) Assigns keyword this to the newly created object
       3) Implicitly has RETURN THIS at the end of the function
       4) Creates an internal link between the object and the function's prototype property
    */
//3) What does the keyword this refer to inside of a constructor function?
    // ANSWER: The newly created object

//4) What is a class? What is an instance?
    /*
        A class is a blueprint for creating objects. It defines the state and behavior. An instance can be thought of as an single object.
    */ 
//5) Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.
function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;

    this.multiplyFavoriteNumber = function (number) {
        return number * this.favoriteNumber;
    }
}

//6) Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

//7) Refactor the following code so that there is no duplication inside the Child function.

function Parent(firstName, lastName, favoriteColor, favoriteFood){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
    /*
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteFood = favoriteFood;*/
    Parent.call(this,firstName,lastName,favoriteColor,favoriteFood);
}