"use strict";

function Accumulator(initialValue, increment){
this.initialValue=initialValue;
this.increment=increment;
}
 

Accumulator.prototype.accumulaltor= function(){
    return this.initialValue+= this.increment;
}

Accumulator.prototype.current= function(){
    return this.initialValue;
}