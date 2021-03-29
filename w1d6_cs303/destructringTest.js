"use strict";
/* global require */
/* eslint-disable quotes */  

/* comment out the node specific code when going to the browser
const assert = require("assert");
const myExports = require("./destructure.js");
const topSalary = myExports.topSalary;  //do this for all of the functions used in the Mocha tests
const getDateAgo = myExports.getDateAgo;
const getLocalDay = myExports.getLocalDay;
const getWeekday = myExports.getWeekday;
const formatDate = myExports.formatDate;
const getLastDayOfMonth = myExports.getLastDayOfMonth;
*/
 
    
/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
        console.log("topsalary: ", topSalary({}) );
      assert.strictEqual( topSalary({}), null);
    });
  });

  /* Write a function getWeekDay(date) to show the 
  weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, 
  ‘SA’, ‘SU’. */
  describe("getWeekDay", function() {
    it("3 January 2014 - friday", function() {
      assert.equal(getWeekday(new Date(2014, 0, 3)), 'FR');
    });

    it("4 January 2014 - saturday", function() {
      assert.equal(getWeekday(new Date(2014, 0, 4)), 'SA');
    });
  
    it("5 January 2014 - sunday", function() {
      assert.equal(getWeekday(new Date(2014, 0, 5)), 'SU');
    });
  
    it("6 January 2014 - monday", function() {
      assert.equal(getWeekday(new Date(2014, 0, 6)), 'MO');
    });
  
    it("7 January 2014 - tuesday", function() {
      assert.equal(getWeekday(new Date(2014, 0, 7)), 'TU');
    });
  
    it("8 January 2014 - wednesday", function() {
      assert.equal(getWeekday(new Date(2014, 0, 8)), 'WE');
    });
  
    it("9 January 2014 - thursday", function() {
      assert.equal(getWeekday(new Date(2014, 0, 9)), 'TH');
    });
  });

  /* European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till 
  Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date. */
  describe("getLocalDay returns the \"european\" weekday", function() {
    it("3 January 2014 - friday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 3)), 5);
    });
  
    it("4 January 2014 - saturday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 4)), 6);
    });
  
    it("5 January 2014 - sunday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 5)), 7);
    });
  
    it("6 January 2014 - monday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 6)), 1);
    });
  
    it("7 January 2014 - tuesday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 7)), 2);
    });
  
    it("8 January 2014 - wednesday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 8)), 3);
    });
  
    it("9 January 2014 - thursday", function() {
      assert.equal(getLocalDay(new Date(2014, 0, 9)), 4);
    });
  });


  /*
  Create a function getDateAgo(date, days) to return the day of 
  month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(),
 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
Should work reliably for days=365 or more:
*/
describe("getDateAgo", function() {

    it("1 day before 02.01.2015 -> day 1", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 1), 1);
    });
  
  
    it("2 days before 02.01.2015 -> day 31", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 2), 31);
    });
  
    it("100 days before 02.01.2015 -> day 24", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 100), 24);
    });
  
    it("365 days before 02.01.2015 -> day 2", function() {
      assert.equal(getDateAgo(new Date(2015, 0, 2), 365), 2);
    });
  
    it("does not modify the given date", function() {
      let date = new Date(2015, 0, 2);
      let dateCopy = new Date(date);
      getDateAgo(dateCopy, 100);
      assert.equal(date.getTime(), dateCopy.getTime());
    });
  
  });
 
  /*
  Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
Parameters:
    year – four-digits year, for instance 2012.
    month – month, from 0 to 11.
    */
   describe("getLastDayOfMonth", function() {
    it("last day of 01.01.2012 - 31", function() {
      assert.equal(getLastDayOfMonth(2012, 0), 31);
    });
  
    it("last day of 01.02.2012 - 29 (leap year)", function() {
      assert.equal(getLastDayOfMonth(2012, 1), 29);
    });
  
    it("last day of 01.02.2013 - 28", function() {
      assert.equal(getLastDayOfMonth(2013, 1), 28);
    });
  });

  /* 
  Write a function formatDate(date) that should format date as follows:
    If since date passed less than 1 second, then "right now".
    Otherwise, if since date passed less than 1 minute, then "n sec. ago".
    Otherwise, if less than an hour, then "m min. ago".
    Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.
*/
describe("formatDate", function() {
    it("shows 1ms ago as \"right now\"", function() {
      assert.equal(formatDate(new Date(new Date - 1)), 'right now');
    });
  
    it('"30 seconds ago"', function() {
      assert.equal(formatDate(new Date(new Date - 30 * 1000)), "30 sec. ago");
    });
  
    it('"5 minutes ago"', function() {
      assert.equal(formatDate(new Date(new Date - 5 * 60 * 1000)), "5 min. ago");
    });
  
    it("older dates as DD.MM.YY HH:mm", function() {
      assert.equal(formatDate(new Date(2014, 2, 1, 11, 22, 33)), "01.03.14 11:22");
    });
  
  });