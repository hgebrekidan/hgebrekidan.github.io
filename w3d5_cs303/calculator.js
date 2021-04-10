

"use strict";

function Calculator(){
    
}
Calculator.prototype.setValue=function(a,b){
    this.a=a;
    this.b=b;
}
    
     Calculator.prototype.sum=function(){
       return this.a+this.b;
    };
    
     Calculator.prototype.mul=function(){
        return this.a*this.b;
    }
    
     Calculator.prototype.sub=function(){
        return this.a-this.b
    }
    
     Calculator.prototype.div=function(){
        return this.a/this.b;
    }

    
