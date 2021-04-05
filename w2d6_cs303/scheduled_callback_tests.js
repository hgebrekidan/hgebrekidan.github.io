"use strict";
describe("time intervaled outputs",function(){
    it("alert numbers using set interval",function(){
        assert.Equal(printNumbers(5,6),56);
    })
})
describe("print numbers after 'from' numbers",function(){
    it("alert numbers using set timeOut version",function(){
        assert.Equal(printNumbers2(5,8),5678);
    })
})
describe("time intervaled outputs",function(){
    it("alert numbers using nested timeOut",function(){
        assert.Equal(printNumbers1(5,8),5678);
    })
})
describe("set timeOut show will be",function(){
    it("alerting set timeOut show",function(){
        assert.Equal(myFunction(),100000000);
    })
})

describe("calculate custormers transactions",function(){
    it("total transactions of all customers",function(){
        let bank=bank = { transactionsDB: [], };
        bank.transactionsDB = [
            { customerId: 1, customerTransactions: [10, 50, -40] },
            { customerId: 2, customerTransactions: [10, 10, -10] },
            { customerId: 3, customerTransactions: [5, -5, 55] }];
        
        assert.Equal(bankBalance(),425);
    })
})