"use strict";

describe("higher order functions map", function () {
 
    it("create an array of a square of each elements", function () {

        assert.deepEqual(myMap([1, 2, 3, 4, 5],multiplyAll), [1, 4, 9, 16, 25])
 
    })
    
 
    it("create an array of a square of each elements", function () {
 
        assert.deepEqual(myMap([-1, -2, -3, -4, -5],multiplyAll), [1, 4, 9, 16, 25])
    })
 
})

describe("higher order functions filter", function () {
 
    it("create an array of odd values", function () {
        assert.deepEqual(myFilter([1, 2, 3, 4, 5],oddValue), [1, 3, 5])
 
    });
    it("create an array of odd values", function () {
        assert.deepEqual(myFilter([17, -21, 28, 1003, 4, 52],oddValue), [17, -21, 1003])
 
    });
 
})

describe("higher order functions reduce", function () {
 
 
    it("sums up values of an array", function () {
 
        assert.deepEqual(myReduce([1, 2, 3, 4, 5],sumValue,0), 15)
    })
    it("sums up values of an array", function () {
 
        assert.deepEqual(myReduce([-1, 2, -3, 4, -5],sumValue,0), -3)
    })
});
