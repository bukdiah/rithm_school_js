console.log("Loading testingSpec");

// WRITE YOUR TESTS HERE!
describe("replaceWith", function() {
    // takes 3 params (string, char, char)
    // returns string
    // case sensitive
    it("returns a string with the replacements", function() {
        expect(replaceWith("awesome", "e", "z")).toEqual(jasmine.any(String));
        expect(replaceWith("awesome", "e", "z")).toBe("awzsomz");
    });

    it("is case sensitive", function() {
        expect(replaceWith("Foo", "F", "B") === "boo").toBe(false);

    });
});

describe("expand", function() {
    // take an array and number
    // returns a copy of the array with as many nums specified
    it("returns an array", function() {
        expect(expand([1,2,3], 1)).toEqual(jasmine.any(Object));
    });

    it("returns a copy of the array with as many numbers as specified", function() {
        expect(expand([1,2,3], 2).length).toBe(6);
        expect(expand([1,2,3], 2)).toEqual([1,2,3,1,2,3]);
    });
});

describe("acceptNumbersOnly", function() {
    // takes in any number of args
    // returns true if all elems are numbers
    it("returns true if all arguments are numbers", function() {
        expect(acceptNumbersOnly(1,"foo")).toBe(false);
        expect(acceptNumbersOnly(1,2,3,4,5,6,7)).toBe(true); 
        expect(acceptNumbersOnly(1,2,3,4,5,6,NaN)).toBe(false); 
    });
});

describe("mergeArrays", function() {
    // return one array with values sorted
    it("should return an array with values sorted", function() {
        expect(mergeArrays([2,1], [3,4])).toEqual(jasmine.any(Object));
        expect(mergeArrays([2,1],[3,4])).toEqual([1,2,3,4]);
    });
});

// Still gotta do mergeObjects

