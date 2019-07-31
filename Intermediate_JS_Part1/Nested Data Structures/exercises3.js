

function printEvens() {
    var nestedArr = [[1, 2, 3], [4, 5, 6], [7, 8], [9, 10, 11, 12]];

    for(let i=0; i<nestedArr.length; i++) {
        for(let j=0; j<nestedArr[i].length; j++) {
            if (nestedArr[i][j] % 2 === 0) {
                console.log(nestedArr[i][j]);
            }
        }
    }
}

printEvens();

function sumTotal() {
    var nestedArr = [[1, 2], [3, 4], [5, 6]];
    
    let sum = 0;
    for(let i=0; i<nestedArr.length; i++) {
        for(let j=0; j<nestedArr[i].length; j++) {
            sum+=nestedArr[i][j];
        }
    }
    return sum;

}

console.log(sumTotal());

function countVowels() {
    var nestedArr = [
        "Elie",
        ["Matt", ["Tim"]],
        ["Colt", ["Whisky", ["Janey"], "Tom"]],
        "Lorien"
      ];

    let row = nestedArr.length;

    for(let i=0; i<row; i++) {
        if(Array.isArray(nestedArr[i])) {
            let elemArr = nestedArr[i];

            if(Array.isArray(elemArr)) {
                for(let i=0; i<elemArr.length; i++) {
                    for(let j=0; j<elemArr[i].length; j++) {
                        console.log(elemArr[i][j]);
                    }
                }
            }

        } else {
            console.log(nestedArr[i]);
        }
    }
}
console.log("\n");
countVowels();