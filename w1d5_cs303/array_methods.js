


"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator,copySorted }; //add all of your function names here that you need for the node mocha tests

function copySorted(arr) {
    return arr.slice().sort();
  }

function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
  }

 
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
    
        // remove if outside of the interval
        if (val < a || val > b) {
          arr.splice(i, 1);
          i--;
        }
      }
  }


  function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
      };
    
      this.calculate = function(str) {
    
        let split = str.split(' '),
          a = +split[0],
          op = split[1],
          b = +split[2];
    
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
          return NaN;
        }
    
        return this.methods[op](a, b);
      };
    
      this.addMethod = function(name, func) {
        this.methods[name] = func;
      };
  }

  function unique(arr) {
    let result = [];

    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }


  function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
      }, {})
  }