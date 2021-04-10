"use strict";


describe("calculator from constructor function", function () {
    let calc;  
    before(function () {
        calc = new Calculator();
        calc.setValue(10,10)
        
    });

    it("the sum of 10 and 10 is 20", function () {
        assert.strictEqual(calc.a, 10);
        assert.strictEqual(calc.b, 10);
        assert.strictEqual(calc.sum(), 20);
    });
    it("the subtract of 10 and 10 is 0", function () {
        assert.strictEqual(calc.a, 10);
        assert.strictEqual(calc.b, 10);
        assert.strictEqual(calc.sub(), 0);
    });

    it("the divide of 10 and 10 is 1", function () {
        assert.strictEqual(calc.a, 10);
        assert.strictEqual(calc.b, 10);
        assert.strictEqual(calc.div(), 1);
    });

    it("the multiplication of 10 and 10 is 100", function () {
        assert.strictEqual(calc.a, 10);
        assert.strictEqual(calc.b, 10);
        assert.strictEqual(calc.mul(), 100);
    });
   
    
});


describe("accumulator", function () {
    it("checks initialValue and increment", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.initialValue, 5);
        assert.strictEqual(accumulator.increment, 10);
    });

    it("checks accumulate", function () {
        const accumulator = new Accumulator(5, 10);
        accumulator.accumulaltor();
        accumulator.accumulaltor();
        assert.strictEqual(accumulator.initialValue, 25);
        assert.strictEqual(accumulator.increment, 10);
    });    

    it("checks report", function () {
        const accumulator = new Accumulator(5, 10);
        assert.strictEqual(accumulator.current(), 5);
    });    

});

describe("mountainBike", function () {
    it("checks mountainBike proto inheritance", function () {
        mountainBike.speedUp(100);
        mountainBike.applyBrake(10);
        assert.strictEqual(mountainBike.speed, 92);
        assert.strictEqual(mountainBike.gear, 3);
    });

});