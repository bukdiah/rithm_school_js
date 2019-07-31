console.log("testing js loaded");

function replaceWith(str, choice, replace) {
    var result = '';
    for(let i=0; i<str.length; i++) {
        let c = str[i];

        if(c === choice) {
            result +=replace;
        } else {
            result+=c;
        }
    }
    return result;
}

function expand(arr, copy) {
    var result = [];
    if (copy === 1) {
        return arr;
    } else if (copy === 0) {
        return [];
    } else {
        for(let i=0; i<copy; i++) {
            result = result.concat(arr);
        }
    }
    return result;
}

function acceptNumbersOnly(...numbers) {
    for(let i=0; i<numbers.length; i++) {
        let elem = numbers[i];

        if(isNaN(elem)) {
            return false;
        } else {
            if (typeof elem === "number") {
                continue;
            } else {
                return false;
            }
        }
    }
    return true;
}

function mergeArrays(arr1, arr2) {
    var result = arr1.concat(arr2);
    result.sort();

    return result;
}