function each(arr, callback) {
    for (let i=0; i<arr.length; i++) {
        callback(arr[i]);
    }
}

each([1,2,3,4], function(val){
    console.log(val);
});

each([1,2,3,4], function(val){
    console.log(val*2);
});

function map(arr, callback) {
    let result = [];

    for(let i=0; i<arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

console.log(map([1,2,3,4], function(val) {
    return val*2;
}));

function reject(arr, callback) {
    let result = [];

    for(let i=0; i<arr.length; i++) {
        if(!callback(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

var arr1 = reject([1,2,3,4], function(val){
    return val > 2;
}); // [1,2]

console.log(arr1);

var arr2 = reject([2,3,4,5], function(val){
    return val % 2 === 0;
}); // [3,5]

console.log(arr2);