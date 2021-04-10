"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
module.exports = {Accumulator }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){
let currentValue=initialValue;
return function(){
    currentValue+=increment;
    
}
//IMPLEMENT THIS
}
function report(){
    return new Accumulator()
}
let accumulated=new Accumulator(0,5);
console.log(accumulated());
let accumulated1=new Accumulator()
// console.log(accumulated());
// console.log(accumulated());
// console.log(accumulated());