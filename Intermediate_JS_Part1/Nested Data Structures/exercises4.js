function rotate(arr, k) {
    k %=arr.length; // # of shifts

    // reverse all elements of the array
    reverse(arr, 0, arr.length-1);
    // reverse the first k elems
    reverse(arr, 0, k-1);
    // reverse the rest of the n-k elems
    reverse(arr, k, arr.length-1);

    return arr;
}

function reverse(arr, start, end) {
    while(start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(rotate([1,2,3], 1));
console.log(rotate([1,2,3], 2));
console.log(rotate([1,2,3], 3));

function makeXOGrid(rows, columns) {
    let subarrays = rows;
    let values = columns;

    let result = [];
    for(let i=0; i<subarrays; i++) {
        let elem = [];

        for(let j=1; j<=values; j++) {
            if(j%2 === 0 ) {
                elem.push("O");
            } else {
                elem.push("X");
            }
        }
        result.push(elem);
    }
    return result;
}

console.log(makeXOGrid(3,3));