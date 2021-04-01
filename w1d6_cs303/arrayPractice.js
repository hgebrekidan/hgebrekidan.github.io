"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    
        return arr.map((key)=> {
            return  {name:key.name,age:key.age*2}
        });
    }

// let arr=[{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
// console.log(doubleAges(arr));
function filterEven(arr){
return arr.filter(item=>item%2===0);
}

function filterOver10(arr) {
    return arr.filter(key=> key.age>10);
}
//  arr=[{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
// console.log(filterOver10(arr));



function findEvenNum(arr){
    return arr.find(item=>item%2===0);
}

function findEvenAge(arr){
    return arr.find(key=>key.age%2===0);
}
let arr=[{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
console.log(findEvenAge(arr));

function includesEvenNum(arr){
    return arr.includes(item=>item%2===0);
}

function includesEvenAge(arr){
// return arr.includes(key=>key.age%2===0?true:false);
return arr.includes(key=>key.age%2===0);
        
}
arr=[{ name: "Sam", age: 15 }, { name: "William", age: 6 }, { name: "Lucy", age: 13 }, { name: "Barney", age: 80 }];
console.log(includesEvenAge(arr));

let array=[1,2,3,4,5,6,7];
console.log(array.includes(7));
