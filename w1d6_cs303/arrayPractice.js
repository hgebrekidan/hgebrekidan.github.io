"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests


function doubleNums(arr){
return arr.map(num => num * 2);
}

function doubleAges(arr){
    
        return arr.map((age,index,arr)=>arr[index]*2);}



function filterEven(arr){
return arr.filter(item=>item%2===0);
}

function filterOver10(arr) {
    return arr.filter(item=>item>10);
}

function findEvenNum(arr){
    return arr.find(item=>item%2===0);
}

function findEvenAge(arr){

}

function includesEvenNum(arr){
    return arr.includes(item=>item%2===0);
}

function includesEvenAge(arr){

}