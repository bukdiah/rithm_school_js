var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName;
        }
    }
};

//console.log(obj.person.sayHi())
console.log(obj.person.sayHi.bind(obj)() +"\n");
/*
    arguments is an example of array-like-objects
*/ 

//Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

function sumEvenArguments(...numbers) {
    let sum = 0;
    for(let i=0; i<numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            sum+=numbers[i];
        }
    }
    return sum;
}

console.log(sumEvenArguments(1,2,3,4));
console.log(sumEvenArguments(1,2,6));
console.log(sumEvenArguments(1,2)+"\n");

function arrayFrom(args) {
    return [].slice.call(args);
}

function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}

console.log(sample(1,2,3,4) +"\n");

function add(a,b) {
    return a+b;
}


function invokeMax(fn, max) {
    var counter = 0;

    return function(...args) {
        counter++;
        if(counter > max) {
            return "Maxed Out!";
        } else {
            return fn.apply(this, args);
        }
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function guessingGame(amount) {
    var answer = randomIntFromInterval(0,10);
    console.log("ANSWER ===> ", answer);

    var guesses = 0;
    return function(guess) {
        if (guesses === amount) {
            return "NO MORE GUESSES";
        }

        if (guess === answer) {
            return "You Got it!";
        } else if (guess > answer) {
            guesses++;
            return "You're too high";
        } else {
            guesses++;
            return "You're too low!";
        }

    };
}

var game = guessingGame(5);
