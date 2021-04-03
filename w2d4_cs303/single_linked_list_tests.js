"use strict";
describe("output the current node value", function(){
    it("list the values of each nodes", function(){
        let list = {value: 1,next: {value: 2,next: {value: 3,next: {value: 4,next: null}}}};

        assert.deepEqual(printList(list),"1234");
    })
})
describe("output the current node value recursively", function(){
    it("recursively list the values of each nodes", function(){
        
        let list = {value: 1,next: {value: 2,next: {value: 3, next: {value: 4,next: null}}}};
        assert.deepEqual(printReverseList(list),"4321");
    })
})