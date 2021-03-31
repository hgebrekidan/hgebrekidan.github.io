"use strict";

describe("higher oder practice", function () {
 
    it("multiply each element", function () {

        assert.deepEqual(myMap([1, 2, 3, 4, 5],multiplyAll), [1, 4, 9, 16, 25])
 
    })
    
 
    it("it sums values", function () {
 
        assert.deepEqual(myMap([-1, -2, -3, -4, -5],multiplyAll), [1, 4, 9, 16, 25])
    })
 
})

describe("higher oder practice", function () {
 
    it("multiply each element", function () {
        assert.deepEqual(myFilter([1, 2, 3, 4, 5],oddValue), [1, 3, 5])
 
    });
    
 
})

describe("higher oder practice", function () {
 
 
    it("it sums values", function () {
 
        assert.deepEqual(myReduce([1, 2, 3, 4, 5],sumValue), 15)
    })
 
});
