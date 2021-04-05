"use strict";
const bank = { transactionsDB: [], };
bank.transactionsDB = [
    { customerId: 1, customerTransactions: [10, 50, -40] },
    { customerId: 2, customerTransactions: [10, 10, -10] },
    { customerId: 3, customerTransactions: [5, -5, 55] }];


// add the new amount added or deducted and save the updated transaction 
let saveTransaction=function(id,amount){
    let customer=bank.transactionsDB.find(item=>item.customerId===id);
    customer.customerTransactions.push(amount);
}
// deduct the amount if the current balance is greater than the amount
let debit=function(id,amount){
    let customer=bank.transactionsDB.find(item=>item.customerId===id);
    let customerTran=customer.customerTransactions.reduce((accumulator,item)=>accumulator+item,0);
    if(customerTran>amount){
        customerTran=customerTran-amount;
        saveTransaction(id,amount);
        return customerTran;
    }
    return customerTran
}
console.log(debit(1,40));
console.log(debit(2,40));
console.log(debit(3,40));

// add the amount to the current balance
let credit=function(id,amount){
    let customer=bank.transactionsDB.find(item=>item.customerId===id);
    let customerTran=customer.customerTransactions.reduce((accumulator,item)=>accumulator+item,0);
    customerTran=customerTran+amount;
    saveTransaction(id,amount);
    return customerTran;
}
console.log(credit(1,100));
console.log(credit(2,100));
console.log(credit(3,100));


// console.log(saveTransaction(1,200));
console.log(bank.transactionsDB[0].customerTransactions);
console.log(bank.transactionsDB[1].customerTransactions);
console.log(bank.transactionsDB[2].customerTransactions);

// let bankBal=function(){
//     let balance=0;
//     for(const trans of bank.transactionsDB){
//         balance+=trans.customerTransactions.reduce((accumulator,item)=>accumulator+item,0);
//     }
//     return balance;
// }
// console.log(bankBal());

// get the updated total balance of all the customers
let bankBalance = function (id) {
    
    let balance=0
    for(const trans of bank.transactionsDB){
         balance+=trans.customerTransactions.reduce((accumulator,item)=>accumulator+item,0);
 
    }
    
return balance;
}
console.log(bankBalance());