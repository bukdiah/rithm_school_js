// forEach always returns undefined

var arr = [4,3,2,1];

// you don't need to supply all 3 args if you don't need all of them
arr.forEach(function (val, index, arr) {
    console.log(val);
});

arr.forEach(function(val,index,arr){
    console.log(index);
});

// 0
// 1
// 2 
// 3

var doubledValues = arr.forEach(function(val,index,arr){
    return val*2;
});

doubledValues; // undefined ===> because forEach always returns undefined!

// this function accepts an array and returns a new array with all of the values doubled

function double(arr) {
    var doubledArr = [];

    arr.forEach(function(val) {
        doubledArr.push(val * 2);
    });

    return doubledArr;
}

// forEach Exercises
function printFirstAndLast(arr) {
    arr.forEach(function(val) {
        let firstChar = val.charAt(0);
        let lastChar = val.charAt(val.length-1);

        console.log(firstChar+lastChar);
    });
} 

printFirstAndLast(['awesome','example','of','forEach']);

function addKeyAndValue(arr, k, value) {
    var result = [];

    arr.forEach(function (val) {
        var obj = {};
        obj["name"] = val["name"];
        obj[k] = value;

        result.push(obj);
    });
    return result;
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));

// Let's do the same shit but with the map function!

// map returns a NEW array of values returned in the callback
// its params are value, index, and array (in that order)
var arr = [1,2,3,4];
arr.map(function(val, index, array) {
    return val*2;
});

var tripledValues = arr.map(function(val,index,arr){
    return val*3;
});

tripledValues; // [3,6,9,12]

// Here is how we can refactor our double method to use map
function doubleArray(arr){
    // return the result of arr.map
    return arr.map(function(val){
        // return a new array with each value doubled
        return val *2;
    });
}

doubleArray([2,4]); // [4,8]

// Exercises

function valTimesIndex(arr) {
    return arr.map(function(val, index, array) {
        return val*index;
    });
}

console.log(valTimesIndex([1,2,3]));

function extractKey(arr, key) {
    return arr.map(function(val, index, array) {
        return val[key];
    });
}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

// Filter returns an array
// considered a testing function. If the element passes the test, it is added to the return array

var arr = [1,2,3,4];
var valuesGreaterThanTwo = arr.filter(function(val){
    return val > 2; 
});

valuesGreaterThanTwo // [3,4]

function filterLetters(arr, letter) {
    let result = arr.filter(function(val) {
        return val.toLowerCase() === letter.toLowerCase(); 
    });

    return result.length;
}

console.log(filterLetters(["a","a","b","c","A"], "a"));
console.log(filterLetters(["a","a","b","c","A"], "z"));


function filterKey(arr, key) {
    return arr.filter(function(val) {
        return val[key] === true;
    });
}

console.log(filterKey([{name: "Elie", isInstructor:true, isHilarious: false},{name: "Tim", isInstructor:true, isHilarious: true},{name: "Matt", isInstructor:true}], "isHilarious"))

// reduce
// take an array and reduce it to a SINGLE value
// 4 args (callback, start)

var arr = [2,4,6,8];
arr.reduce(function(acc,next){
    return acc + next;
},5);

/*
In the first iteration, acc is 5 and next is 2; the callback returns 5 + 2 = 7.
In the second iteration, acc is 7 and next is 4; the callback returns 7 + 4 = 11.
In the third iteration, acc is 11 and next is 6; the callback returns 11 + 6 = 17.
In the last iteration, acc is 17 and next is 8; the callback returns 17 + 8 = 25.
Now the array is exhausted, so reduce returns 25 (which is the sum of all elements in the array, plus 5)
*/

var arr = [2,4,6,8];
arr.reduce(function(acc,next){
    return acc + next;
});

// 20 (When no second argument is supplied to reduce, the `acc` starts at the first value in the array, i.e. 2. In this case, we simply get the sum of all values in the array.) 

// Example of array reduced to an object
var arr = [1,2,3,4];
var obj = arr.reduce(function(acc, next) {
    if (next >=2) {
        acc['key'+next] = next;
    }
    return acc;
}, {});

console.log(obj);

// Exercises with Reduce
console.log("REDUCE SECTION")
function extractKey(arr, key) {
    return arr.reduce(function(acc, curr) {
        acc.push(curr[key]);

        return acc;
    },[]);

}

console.log(extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name"));

function filterLetters(arr, letter) {
   return arr.reduce(function(acc, curr) {
        if (curr.toLowerCase() === letter.toLowerCase()) {
            acc++;
        }
        return acc;
    },0);
}

console.log(filterLetters(["a","a","b","c","A"], "a"));
console.log(filterLetters(["a","a","b","c","A"], "z"));

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc, curr) {
        let obj = {};
        obj["name"] = curr["name"];
        obj[key] = value;
        acc.push(obj);
        
        return acc;
    },[]);
}

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true))