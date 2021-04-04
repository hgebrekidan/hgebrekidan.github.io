"use strict"
//module.exports = {myFilter,myFilterArra,byField,makeArmy};
// /**
//  * 
//  */
// function makeCounter() {
//     let count = 0;
    
//     return function() {
//     return count++;
//     };
//    }
    
//    let counter = makeCounter();
//    let counter2 = makeCounter();
    
// //    console.log(counter()); // 0
// //    console.log(counter()); // 1
// //    console.log(counter()); // 2
    
// //    console.log(counter2()); // 0
// //    console.log(counter2()); // 1
    
//    //Yes, they have independent outer Lexical Environments, each one has its own count.
//    // you 
    
// function makeWorker() {
//     let name = "Pete";
    
//     return function() {
//     //console.log(name);
//     };
//    }
    
//    let name = "John";
//    // create a function
//    let work = makeWorker();
//    work(); // what will it show? pete. 
//    /*
//     Because The work() function in the code below gets name
//     from the place of its origin through the outer lexical environment reference
//     */
//    function Counter() {
 
//     let count = 0;
    
//     this.up = function() {
//     return ++count;
//     };
//     this.down = function() {
//     return --count;
//     };
//    }
    
//    let counter = new Counter();
    
// //    console.log(counter.up()); // 1
// //   console.log(counter.up()); // 2
//  //  console.log(counter.down()); // 1
    
//    /*Both nested functions are created within the same outer Lexical Environment,
//     so they share access to the same count variable.
//    */
//   let phrase = "Hello";
// if (true) {
//  let user = "John";
 
//  function sayHi() {
//  //console.log(`${phrase}, ${user}`);
//  }
// }
 
// sayHi(); // error.
 
// // The function sayHi is declared inside the if, so it only lives inside it. and if function
// let x = 1;
 
// function func() {
// //console.log(x); // ?
// let x = 2;
// }
// func(); //error.....Cannot access 'x' before initialization.


/**
 * 
 * @param {number} num 
 * @param {number} num2 
 * @return {number}
 */
function inBetween(num, num2) {
    return function between(target) {
        if (target >= num && target <=num2) {
            return true;
        } else {
            return false;
        }
    }
}
function myFilter(arr,a,b,cbf) {
    let filterred= arr.filter(cbf(a,b)); 
    return filterred
}
//let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//console.log(myFilter(arr3,3,8,inBetween));


let arrForInArr = [1, 2, 3, 4, 5, 6, 7]
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

function myFilterArra(arr,arr2,cbf) {
      let final = arr.filter(cbf(arr2))
    return final
}
// let result = inArray;
// let final = arrForInArr.filter(result([3, 5, 8]))
//console.log(myFilterArra(arrForInArr,[3, 5, 8],inArray));

function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }
  /**
   *
   * @returns{Object} return array of function
   */
  function makeArmy() {
    let shooters = [];
    for(let i = 0; i < 10; i++) {
      let shooter = function() {
        return i ;
      };
      shooters.push(shooter);
    }
    return shooters;
  }


