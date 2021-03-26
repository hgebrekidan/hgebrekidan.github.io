"use strict";
/* global assert  ucFirst checkSpam truncate extractCurrencyValue camelize  */
/* comment out the node specific code when going to the browser*/
// const assert = require("assert");  //always need this with node
// const myExports = require("./app.js");  //with node need the name of your file with your functions here
// const getMaxSubSum = myExports.getMaxSubSum;  //do this for all of the functions used in the Mocha tests
// const ucFirst = myExports.ucFirst; 
// const truncate = myExports.truncate; 
// const camelize = myExports.camelize; 


/* eslint-disable quotes */
describe("ucFirst", function() {
  it('Uppercases the first symbol', function() {
    assert.strictEqual(ucFirst("john"), "John");
  });

  it("Doesn't die on an empty string", function() {
    assert.strictEqual(ucFirst(""), "");
  });
});

describe("checkSpam", function() {
  it('finds spam in "buy ViAgRA now"', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('finds spam in "free xxxxx"', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('no spam in "innocent rabbit"', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});

/* eslint-enable quotes */
describe("truncate", function() {
  it("truncate the long string to the given length (including the ellipsis)", function() {
    assert.equal(
      truncate("What I'd like to tell on this topic is:", 20),
      "What I'd like to te…"
    );
  });

  it("doesn't change short strings", function() {
    assert.equal(
      truncate("Hi everyone!", 20),
      "Hi everyone!"
    );
  });

});

describe("extractCurrencyValue", function() {

  it("for the string $120 returns the number 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });


});
describe("getMaxSubSum", function() {
    it("maximal subsum of [1, 2, 3] equals 6", function() {
      assert.equal(getMaxSubSum([1, 2, 3]), 6);
    });
  
    it("maximal subsum of [-1, 2, 3, -9] equals 5", function() {
      assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
    });
  
    it("maximal subsum of [-1, 2, 3, -9, 11] equals 11", function() {
      assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
    });
  
    it("maximal subsum of [-2, -1, 1, 2] equals 3", function() {
      assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
    });
  
    it("maximal subsum of [100, -9, 2, -3, 5] equals 100", function() {
      assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
    });
  
    it("maximal subsum of [] equals 0", function() {
      assert.equal(getMaxSubSum([]), 0);
    });
  
    it("maximal subsum of [-1] equals 0", function() {
      assert.equal(getMaxSubSum([-1]), 0);
    });
  
    it("maximal subsum of [-1, -2] equals 0", function() {
      assert.equal(getMaxSubSum([-1, -2]), 0);
    });
  
    it("maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6", function() {
      assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
    });
  });

describe("camelize", function() {

    it("leaves an empty line as is", function() {
      assert.equal(camelize(""), "");
    });
  
    it("turns background-color into backgroundColor", function() {
      assert.equal(camelize("background-color"), "backgroundColor");
    });
  
    it("turns list-style-image into listStyleImage", function() {
      assert.equal(camelize("list-style-image"), "listStyleImage");
    });
  
    it("turns -webkit-transition into WebkitTransition", function() {
      assert.equal(camelize("-webkit-transition"), "WebkitTransition");
    });
  
  });