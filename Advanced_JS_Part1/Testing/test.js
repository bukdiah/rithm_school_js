let arr;
/**
 * beforeEach executes a function prior to every test
 * 
 */
beforeEach(function(){
  arr = [1,3,5];
});

describe("Arrays", function(){
  describe("#push", function(){
    it("adds elements to an array", function(){
      arr.push(7);
      expect(arr).toEqual([1,3,5,7]); // toEqual is used to compare equality of two OBJECTS (Do the 2 arrays have the same elements)
    });
    it("returns the new length of the array", function(){
      expect(arr.push(7)).toBe(4);
    });
    it("adds anything into the array", function(){
      expect(arr.push({})).toBe(4);
    });
  });
});

/**
 * Red, Green, Refactor workflow
 * 1) Start by writing a test. Make sure the tests fails (i.e. is red). Writing a failing test is important; if the test passes before you write any code, then what are you actually testing?
   2) Go write code to make the test pass.
   3) Refactor your code as needed. As long as the tests are still passing, you can be reasonably confident that you aren't introducing new bugs into the program.
 */

describe("onlyStrings", function(){
    it("returns an array", function(){
      expect(onlyStrings([1,2,3])).toEqual(jasmine.any(Array));
    });
    it("does not change arrays of strings", function(){
      expect(onlyStrings(["a","b","c"])).toEqual(["a","b","c"]);
    });
    it("removes non-string primitives from an array", function(){
      expect(onlyStrings([1,"hi",null,"cool",undefined,"woah",false,"ok"])).toEqual(["hi","cool","woah","ok"]);
    });
    it("removes reference types from an array", function(){
      expect(onlyStrings([{},"a",[],"b",function(){},"c"])).toEqual(["a","b","c"]);
    });
  });

  // After writing the tests, you write the onlyStrings function
  function onlyStrings(arr) {
    let strings = [];
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") strings.push(arr[i]);
    }
    return strings;
  }

  // you could refactor using filter
  // if the tests STILL pass, you can be certain u didn't introduce any bugs
  function onlyStrings(arr) {
    return arr.filter(function(el) { return typeof el === "string"; });
  }

