
// "use strict"
// /**
//  * 
//  * @param {Object} arr is array 
//  * @param {Function} CallBack is call back function
//  * @returns{Object} return mapped values 
//  */
// function myMap(arr,CallBack){
//     let mapArr=CallBack(arr)
//     return mapArr
// }
// /**
//  * 
//  * @param {Object} arr is array 
//  * @param {Function} callBack  is callBack function
//  * @returns{Object} returns filtered value
//  */
// function myFilter(arr ,callBack){
//   let filterArr=callBack(arr)
//   return filterArr;
// }
// /**
//  * 
//  * @param {Object} arr is array
//  * @param {Function} callBack is call back function 
//  * @param {Any} intialValues is intial values
//  * @returns {Any} returns the computed result 
//  */
// function myReduce(arr,callBack,intialValues=0){
//     let result=intialValues;
//     result=callBack(arr)
//     return result;
// }
// /**
//  * 
//  * @param {Object} arr is array;
//  * @param {Function} callBack  is call back function;
//  * @param {Number} n is number
//  * @returns{Number} return the first found values of n
//  */
// function myFind(arr,callBack,n){
//     let found= callBack(arr,n)
//     return found;
// }
// /**
//  * 
//  * @param {Object} arr is array;
//  * @param {Function} callBack is call back function
//  * @param {Number} n is the target value
//  * @returns{Number} return the first index of n; 
//  */
// function myFindIndex(arr,callBack,n){
//     let index=callBack(arr,n)
//     return index;
// }
// /**
//  * 
//  * @param {Object} arr is array; 
//  * @param {Function} callBack is function;
//  * @param {Number} n is target number
//  * @returns{Number} return the last index values of n
//  */
// function myFindLastIndex(arr,callBack,n){
//     let lastIndex=callBack(arr,n)
//     return lastIndex
// }
// /**
//  * 
//  * @param {Object} arr is array;
//  * @param {Function} callBack is function 
//  * @param {Number} n is target number
//  * @returns{Boolean} return true if n exists in the array 
//  */
// function myIncludes(arr,callBack,n){
//     let include=callBack(arr,n)
//     return include;
// }
// //////////////////////////////////////////
// describe("My own map", function () {
//     beforeEach(function () {
//         numArray = [5, 0, 7, 77, -20, 300, 51, 2];
//         peopleArray = [{ name: "Sam", age: 15 }, 
//         { name: "William", age: 6 }, 
//         { name: "Lucy", age: 13 }, 
//         { name: "Barney", age: 80 }];
//     });

//     it("doubles an array of numbers", function () {
//         function double(arr){
//             let doubleArr=[]
//             for(let n of arr){
//                 doubleArr.push(n*2)
//             }
//             return doubleArr;
//         }
//         assert.deepEqual(myMap(numArray,double), [10, 0, 14, 154, -40, 600, 102, 4]);
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
//     });
//     it("the original array is not updated", function () {
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
//     });
// });

// //////////////////////////////////////
// describe("My own filter", function () {
//     beforeEach(function () {
//         numArray = [5, 0, 7, 77, -20, 300, 51, 2];
//         peopleArray = [{ name: "Sam", age: 15 }, 
//         { name: "William", age: 6 }, 
//         { name: "Lucy", age: 13 }, 
//         { name: "Barney", age: 80 }];
//     });

//     it("filter all even number", function () {
//         function evenNum(arr){
//             let evenArr=[]
//             for(let n of arr){
//                  if(n%2===0){
//                     evenArr.push(n)
//                  }  
//             }
//             return evenArr;
//         }
//         assert.deepEqual(myFilter(numArray,evenNum), [0,-20,300,2]);
//     });
//     it("the original array is not updated", function () {
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
//     });
// });

// ////////////////////////////////////////////
// describe("My own reduce", function () {
//     beforeEach(function () {
//         numArray = [5, 0, 7, 77, -20, 300, 51, 2];
//         peopleArray = [{ name: "Sam", age: 15 }, 
//         { name: "William", age: 6 }, 
//         { name: "Lucy", age: 13 }, 
//         { name: "Barney", age: 80 }];
//     });

//     it("reduce to sum of element", function () {
//         function sumAll(arr){
//             let sum=0;
//             for(let n of arr){
//                  sum+=n 
//             }
//             return sum;
//         }
//         assert.deepEqual(myReduce(numArray,sumAll,0), 422);
//     });
//     it("the original array is not updated", function () {
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
//     });
// });

// /////////////////////////

// describe("My own find", function () {
//     beforeEach(function () {
//         numArray = [5, 0, 7, 77, -20, 300, 51, 2];
//         peopleArray = [{ name: "Sam", age: 15 }, 
//         { name: "William", age: 6 }, 
//         { name: "Lucy", age: 13 }, 
//         { name: "Barney", age: 80 }];
//     });

//     it("find the given  element", function () {
//         function findValue(arr,n){
//             for(let element of arr){
//                 if(element===n)
//                 return n;
//             }
//             //undefined
//         }
//         assert.deepEqual(myFind(numArray,findValue,77),77 );
//     });
//     it("if the required element not in the array is undefined", function () {
//         function findValue(arr,n){
//             for(let element of arr){
//                 if(element===n)
//                 return n;
//             }
//         }
//         assert.deepEqual(myFind(numArray,findValue,17),undefined );
//     });
//     it("the original array is not updated", function () {
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
//     });
// });

// ///////////////////////////////////////////
// describe("My own findIndex", function () {
//     beforeEach(function () {
//         numArray = [5, 0, 7, 77, -20, 300, 51, 2];
//         peopleArray = [{ name: "Sam", age: 15 }, 
//         { name: "William", age: 6 }, 
//         { name: "Lucy", age: 13 }, 
//         { name: "Barney", age: 80 }];
//     });

//     it("find index of the given  element", function () {
//         function searchIndex(arr,n){
//             for(let i=0;i<arr.length;i++){
//                 if(arr[i]===n)
//                  return i;
//             }
//         return -1;
//         }
//         assert.deepEqual(myFindIndex(numArray,searchIndex,77),3);
//     });
//     it("if the required element is not element of the array -1", function () {
//         function searchIndex(arr,n){
//             for(let i=0;i<arr.length;i++){
//                 if(arr[i]===n)
//                  return i;
//             }
//         return -1;
//         }
//         assert.deepEqual(myFindIndex(numArray,searchIndex,17),-1);
//     });
//     it("the original array is not updated", function () {
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51, 2]);  //test for pure function
//     });
// });

// ///////////////////////////////
// describe("My own findLastIndex", function () {
//     beforeEach(function () {
//         numArray = [5, 0, 7, 77, -20, 300, 51,77, 2];
//         peopleArray = [{ name: "Sam", age: 15 }, 
//         { name: "William", age: 6 }, 
//         { name: "Lucy", age: 13 }, 
//         { name: "Barney", age: 80 }];
//     });

//     it("find last index of the given  element", function () {
//         function lastIndex(arr,n){
//             for(let i=arr.length;i>=0;i--){
//                 if(arr[i]===n)
//                  return i;
//             }
//         return -1;
//         }
//         assert.deepEqual(myFindLastIndex(numArray,lastIndex,77),7);
//     });
//     it("if the required element is not element of the array return -1", function () {
//         function lastIndex(arr,n){
//             for(let i=arr.length;i>=0;i--){
//                 if(arr[i]===n)
//                  return i;
//             }
//         return -1;
//         }
//         assert.deepEqual(myFindLastIndex(numArray,lastIndex,17),-1);
//     });
//     it("the original array is not updated", function () {
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51,77, 2]);  //test for pure function
//     });
// });
// ////////////////////////////////////////////////////////


// describe("My own includes", function () {
//     beforeEach(function () {
//         numArray = [5, 0, 7, 77, -20, 300, 51,77, 2];
//         peopleArray = [{ name: "Sam", age: 15 }, 
//         { name: "William", age: 6 }, 
//         { name: "Lucy", age: 13 }, 
//         { name: "Barney", age: 80 }];
//     });

//     it("include even number", function () {
//         function valueInclude(arr,n){
//             for(let i=0;i<arr.length;i++){
//                 if(arr[i]===n)
//                  return true;
//             }
//         return false;
//         }
//         assert.deepEqual(myIncludes(numArray,valueInclude,-20),true);
//     });
//     it("include even number ", function () {
//         function valueInclude(arr,n){
//             for(let i=0;i<arr.length;i++){
//                 if(arr[i]===n)
//                  return true;
//             }
//         return false;
//         }
//         assert.deepEqual(myIncludes([5,11,47,53,85],valueInclude,59),false);
//     });
//     it("the original array is not updated", function () {
//        assert.deepEqual(numArray, [5, 0, 7, 77, -20, 300, 51,77, 2]);  //test for pure function
//     });
// });


    function myMap(arr,multiplyAll) {
    let newArr=[];
    for(let key of arr){
    let result=multiplyAll(key)
    newArr.push(result)
     }
    return newArr;
     }
     function multiplyAll(elem){
        return elem*elem
         }
    console.log(myMap([1,2,3,4,5], multiplyAll))
    
    function oddValue(elem){
        if(elem%2!==0){
        return true
        }else{
        return false
        }
        
        }
        
        function myFilter(arr,oddValue){
        let newArray=[];
        for(let key of arr){
        if(oddValue(key)){
        newArray.push(key)
        }
        
        }
        return newArray;
        }

        /**
 * 
 * @param {number} a 
 * @param {number} b 
 */
 function sumValue(a,b){
    return a+b;
    }
    /**
    * 
    * @param {array} arr 
    * @param {numuber} sumValue 
    */
    function myreduce(arr,sumValue){
    let sum=0
    for(let key of arr){
    sum=sumValue(sum, key)
    }
    return sum
    }
    console.log(myreduce([1,2,3,4,3],sumValue))