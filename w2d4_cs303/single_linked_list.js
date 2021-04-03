"use strict";
// out put a single linked list recursively


  
  function printList(list) {

  if (list) {
      return list.value+""+printList(list.next); // do the same for the rest of the list
    }
    // console.log(list.value+); // output the current item
  return "";
    
   
  }
  let list = {value: 1,next: {value: 2,next: {value: 3,next: {value: 4,next: null}}}};

  console.log(printList(list));

  // out put a single linked list recursively in reverse

  function printReverseList(list) {
  
    if (list.next===null) {
       return list.value+"";
    }
       return printReverseList(list.next)+list.value;
   
  
  }
   list = {value: 1,next: {value: 2,next: {value: 3,next: {value: 4,next: null}}}};
  console.log(printReverseList(list));

