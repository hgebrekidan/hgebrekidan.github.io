"use strict";
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