"use strict";
describe("output the current node value", function(){
    it("list the values of each nodes", function(){
        let aList = {value: 1,next: {value: 2,next: {value: 3,next: {value: 4,next: null}}}};
        let aList = {value: 1,next: {value: 2,next: {value: 3, next: {value: 4,next: null}}}};
        assert.deepEqual(printList(aList),(1,2,3,4));
    })
})
describe("output the current node value recursively", function(){
    it("recursively list the values of each nodes", function(){
        let aList = {value: 1,next: {value: 2,next: {value: 3, next: {value: 4,next: null}}}};
        assert.deepEqual(printReverseList(aList),(4,3,2,1));
    })
})