"use strict"

/**
 * @returns{Calculator} this is a constructor function
 */
 function Calculator() {
    /**
     * 
     * @returns{Number} sum;
     */
    this.sum=function(){
    return this.a+this.b;
     };
    /**
     * 
     * @returns{Number} multiplication;
     */
    this.mul=function(){
    return this.a*this.b;
     }}