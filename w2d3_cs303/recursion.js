/* eslint-disable id-length */
"use strict";



function sumRecursive(num){
    if(num>=0){
        if(num===0){
            return 0;
        }
        return num+sumRecursive(num-1);
    }
    return num+sumRecursive(num+1);
}

console.log(sumRecursive(5));
console.log(sumRecursive(-5));
console.log(sumRecursive(0));

/**
 * Returrns n * n-1 * n-2 ... * 1
 * @param {number} num is the factorial end number
 * @returns {number} factorial of num
 */
function factorialRecursive(num) {
    /* base case */
    if (num === 0) {
        return 1;
    } else {
        
        return num * factorialRecursive(num - 1);  //reduction step
       
    }

}

console.log(factorialRecursive(7));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
console.log(factorialRecursive(10));

/**
 * Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.
 * @param {number} num is the fibonacci number to compute
 * @returns {number} returns the n-th Fibonacci number.
 */
function fibRecursive(num) {
    if (num < 3) {
        return 1;  // by definition
    } else {
        return fibRecursive(num - 1) + fibRecursive(num - 2);
    }
}

console.log("fibonacci");
console.log(fibRecursive(3));
console.log(fibRecursive(8)); // 13
//console.log(fib(77)); // 5527939700884757

// eslint-disable-next-line require-jsdoc
function fib2(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  console.log( fib2(3) ); // 2
  console.log( fib2(7) ); // 13
  console.log( fib2(77) ); // 5527939700884757