"use strict"
const bicyle={
    gear :1,
    speed:0,

    speedUp(increment){
        this.speed+= increment
    },

    applyBrake(decrement){
        this.speed-=decrement
    }

}


const mountainBike ={
    gear:3,
    speed:2,
    seatHeight:1,

    setSeatHeight(seatHeight){
        this.seatHeight=seatHeight
    },
    __proto__:bicyle
}