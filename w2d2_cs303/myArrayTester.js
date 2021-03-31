describe("higher oder practice", function () {
    // beforeEach(function () {
    //     numArray = [1, 2, 3, 4, 5];
    // })
    it("multiply each element", function () {
        assert.strictEqual(myMap([1, 2, 3, 4, 5]), [1, 4, 9, 16, 25])
 
    })
 
    it("it filters odd elements", function () {
 
        assert.strictEqual(myFilter([1, 2, 3, 4, 5]), [1, 3, 5])
    })
 
    it("it sums values", function () {
 
        assert.strictEqual(myreduce([1, 2, 3, 4, 5]), 15)
    })
 
})