"use strict";
// out put a single linked list recursively


  
  function printList(list) {

  
    console.log(list.value); // output the current item
  
    if (list.next) {
      printList(list.next); // do the same for the rest of the list
    }
   
  
  }
  
   printList(list);

  // out put a single linked list recursively in reverse

  function printReverseList(list) {
  
    if (list.next) {
      printReverseList(list.next);
    }
  
    alert(list.value);
  }
  
//   printReverseList(list);

