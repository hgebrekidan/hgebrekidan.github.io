
// part one the basics: section objects


//a. Hello, object

let Hello={greeting1:"Hello",greeting2:"Good Bye"}
//b. Check for emptiness (include the tests in VSCode)

console.log(Hello.noSuchProperty===undefined);// false because some property exists
//c. Sum object properties

let users={first_name:"Bob",last_name:"John"}
console.log("Full Name: "+users.first_name+" "+users.last_name);
//d. Multiply numeric properties by 2

let usersAge={age1:18,age2:23,age3:29}
for(const age in usersAge){
    console.log(usersAge[age]*2);
}
