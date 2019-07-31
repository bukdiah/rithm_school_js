function countdown(num) {
    var timer = setInterval(function() {
        num--;
        if(num<=0) {
            clearInterval(timer);
            console.log("DONE");
        } else {
            console.log(num);
        }
    },1000);
}
//countdown(4);

function randomGame() {
    var number;
    var count = 0;
    var timer = setInterval(function() {
        number = Math.random();
        count++;
        console.log("Number: "+number);
        if(number > 0.75) {
            clearInterval(timer);
            console.log("It took "+count + " tries");
        }
    },1000);
}

console.log(randomGame())

// function isEven(number) {
//     return number % 2 ===0;
// }

// console.log(isEven(2))
// console.log(isEven(3))

// function isOdd(number) {
//     return number % 2 === 1;
// }

// console.log(isOdd(3))
// console.log(isOdd(14))

// function isPrime(number) {
//     for(let i=2; i<number; i++) {
//         if(number%i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log("isPrime check");
// console.log(isPrime(8))
// console.log(isPrime(17))

// console.log("\n")
// console.log("numberFact!")
// function numberFact(number, callback) {
//     return callback(number);
// }

// console.log(numberFact(59, isEven));
// console.log(numberFact(59, isOdd));
// console.log(numberFact(59, isPrime));

// console.log("\n find!");

// function find(arr, callback) {
//     for(let i=0; i<arr.length; i++) {
//         if(callback(arr[i]))
//             return arr[i];
//     }
//     return null;
// }

// var val = find([8,11,4,27], function(val){return val >= 10}); // 11
// console.log(val);
// val = find([8,11,4,27], function(val){return val === 5}); // null
// console.log(val)

// console.log("\n findIndex")
// function findIndex(arr, callback) {
//     for(let i=0; i<arr.length; i++) {
//         if(callback(arr[i])) {
//             return i;
//         }
//     }
//     return -1;
// }

// // returns 1 (index of the first value greater than or equal to 10)
// val = findIndex([8,11,4,27], function(val){return val >= 10});
// console.log(val);
// val = findIndex([8,11,4,27], function(val){return val === 7}); // undefined
// console.log(val);

// console.log("\n special multiply");

function specialMultiply(a,b) {
    if(arguments.length === 2) {
        return a*b;
    } 
    
    return function (c) {
            return a*c;
    }
}

val = specialMultiply(3,4); // 12
console.log(val);
val = specialMultiply(3)(4); // 12
console.log(val);
val = specialMultiply(3); // returns a function 
console.log(val);