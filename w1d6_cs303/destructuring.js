"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary, getDateAgo }; //add all of your function names here that you need for the node mocha tests
/**
 * 
 * @param {Object} salaries; 
 * @returns{String}return the name of top salary;
 */
function topSalary(salaries) {
    if(Object.keys(salaries).length===0)
    return null;
    let nameOfTopSalary;
    let topSalary=-Infinity;
    for(let key in salaries){
        if(topSalary<salaries[key]){
            topSalary=salaries[key]
            nameOfTopSalary=key ;
        }  
    }
  return nameOfTopSalary;
  }

/**
 * 
 * @param {Date} date is date; 
 * @param {Number} days is days
 * @returns{Number} return date before the given days
 */
  function getDateAgo(date, days) {
    let dateCopy = new Date(date);
  
    dateCopy.setDate(date.getDate() - days);
    return dateCopy.getDate();
  }
 /**
  * 
  * @param {Date} date iss date;
  * @returns{String} return name of the day; 
  */ 
function getWeekday(date){
let days=["SU","MO","TU","WE","TH","FR","SA"]
return days[date.getDay()]
}
function getLocalDay(date){
    if(date.getDay()===0)
       return 7;
    return date.getDay();
}
/**
 * 
 * @param {Number} year is year; 
 * @param {Number} month is month;
 * @returns{Number} return date number;
 */
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  /**
   * 
   * @param {Date} date is date; 
   * @returns{String} return status of the difference; 
   */
  function formatDate(date) {
    let diff = new Date() - date; // the difference in milliseconds
    if (diff < 1000) { // less than 1 second
      return 'right now';
    }
    let sec = Math.floor(diff / 1000); // convert diff to seconds
    if (sec < 60) {
      return sec + ' sec. ago';
    }
  
    let min = Math.floor(diff / 60000); // convert diff to minutes
    if (min < 60) {
      return min + ' min. ago';
    }
    // format the date
    // add leading zeroes to single-digit day/month/hours/minutes
    let d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // take last 2 digits of every component
  
    // join the components into date
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }

