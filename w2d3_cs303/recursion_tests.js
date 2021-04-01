"use strict";
describe("summation of numbers until that number",function(){
    it("sum positive numbers",function(){
        assert.deepEqual(sumRecursive(9),45);
    })
    it("sum negative numbers",function(){
        assert.deepEqual(sumRecursive(-9),-45);
    })
    it("sum zero only",function(){
        assert.deepEqual(sumRecursive(0),0);
    })
})
describe("factorial of a number",function(){
    it("factorial of a positive number",function(){
        assert.deepEqual(factorialRecursive(5),120);
    })
    it("factorial of a positive number",function(){
        assert.deepEqual(factorialRecursive(7),5040);
    })
    it("factorial of a positive number",function(){
        assert.deepEqual(factorialRecursive(10),3628800);
    })
})
describe("fibonacci of a number",function(){
    it("fibonacci of a positive number",function(){
        assert.deepEqual(fibRecursive(8),21);
    })
    it("fibonacci of a positive number",function(){
        assert.deepEqual(fibRecursive(10),55);
    })
    it("fibonacci of a positive number",function(){
        assert.deepEqual(fibRecursive(3),2);
    })
})