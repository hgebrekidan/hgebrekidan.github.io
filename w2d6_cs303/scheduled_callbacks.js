"use strict";
//1.a. using set interval
function printNumbers(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  // usage:
//   printNumbers(5, 6);

  // using nested setTimeOut
  // make the numbers print out after the “from” seconds

  function printNumbers1(from, to) {
    let current = from;
  
    setTimeout(function go() {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }, 1000);
  }
  
  // usage:
//   printNumbers1(5, 10);

  // set timeOut version
  function printNumbers2(from, to) {
    let current = from;
  
    function go() {
      console.log(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }
  
    go();
    let timerId = setInterval(go, 1000);
  }
  
//   printNumbers2(5, 10);

  //b. setTimeOut show will be:

  
function myFunction(){
    let i = 0;
setTimeout(() => console.log(i), 100); // 100000000

// assume that the time to execute this function is >100ms
for(let j = 0; j < 100000000; j++) {
  i++;
}

}
