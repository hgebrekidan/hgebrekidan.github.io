"use strict"
//const assert = require("assert"); 
// const myExports = require("./recursiveLinkedTest.js");
//const printListReverse=myExports.printListReverse;
//const myFilter=myExports.myFilter;
//const myFilterArra=myExports.myFilterArra;
//const makeArmy=myExports.makeArmy;
myFilter,myFilterArra,byField,makeArmy
let arr;
describe("filter a number between two values", function(){
    it("sum a given number utill one using recursion",function(){
        arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        assert.deepEqual(myFilter(arr,3,8,inBetween),[ 3, 4, 5, 6, 7, 8 ])
    })
    it("Filter array in array",function(){
     assert.deepEqual(myFilterArra(arr,[1, 2, 11],inArray),[ 1, 2])
 })
//  it("Fibonacci numbers ",function(){
//      assert.deepEqual(fabonnacci(8),21)
//  })
 })
 
 let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" },
  ];

  it("sorts users by First Name.", function(){
    let nameSortedKey = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson"},
      { name: "Pete", age: 18, surname: "Peterson" },
    ];
    let nameSortedAnswer = users.sort(byField("name"));
    assert.deepEqual(nameSortedKey, nameSortedAnswer);
  });

  it("sorts users by Age.", function(){
    let ageSortedKey = [
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson"},
    ];
    let ageSortedAnswer = users.sort(byField("age"));
    assert.deepEqual(ageSortedKey, ageSortedKey);
  });

  it("sort users by Surname.", function(){
    let surnameSortedKey = [
      { name: "Ann", age: 19, surname: "Hathaway" },
      { name: "John", age: 20, surname: "Johnson"},
      { name: "Pete", age: 18, surname: "Peterson" },
    ];
    let surnameSortedAnswer = users.sort(byField("surname"));
    assert.deepEqual(surnameSortedAnswer, surnameSortedKey);
  });

describe("army", function() {
  let army;
  
  before(function() {
    army = makeArmy();
  });

  it("army[0] (army on the zero index) will give us 0.", function() {
    assert.deepEqual(army[0](),0);
  });
  
  it("army[3] (army on the third index) will give us 3.", function() {
    army[3]();
    assert.deepEqual(army[3](),3);
  });
  it("army[7] (army on the seventh index) will give us 7.", function() {
    assert.deepEqual(army[7](),7);
  });
  it("army[9] (army on the ninth index) will give us 9.", function() {
    assert.deepEqual(army[9](),9);
  });

});