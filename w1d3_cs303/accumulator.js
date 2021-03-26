"use strict"

/**
 * 
 
 * @returns{Accumulator} constructor function
 */
 function Accumulator(currentValue,increment){
    this.currentValue=currentValue;
    this.increment=increment;
    this.accumulatedValue=function(){
    return this.currentValue+=this.increment;
     }
    this.result=function(){
    return this.currentValue;
     }
    //implement this
     
    }