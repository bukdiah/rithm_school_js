// Part 1

function Person(firstName, lastName, favoriteColor, favoriteNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = [];

    this.family = [];

}

Person.prototype.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

Person.prototype.toString = function() {
    return this.fullName() + `, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
}

Person.prototype.addToFamily = function(person) {
    if(person instanceof Person) {
        // if no items originally
        if(this.family.length === 0) {
            this.family.push(person);
        }
        // check for duplicates
        for(let i=0; i<this.family.length; i++) {
            if(this.family[i].toString() !== person.toString()) {
                this.family.push(person);
            }
        }
    }
    return this.family.length;
}

// Part 2
Array.prototype.map = function(fn) {
    var result = [];

    for(let i=0; i<this.length; i++) {
        result.push(fn(this[i],i,this));
    }
    return result;
}

String.prototype.reverse = function () {
    var result = '';

    for(let i=this.length-1; i>=0; i--) {
        result+=this[i];
    }
    return result;
}

// Implement your own version of Function.prototype.bind



// Part 3
