console.log("Data Types In JavaScript");
//1. Primitive Data Types
//a.String
var myname = "Somu";
console.log(`My name is :${myname}`);
//b.Number
var my_age = 46;
console.log(`My age is :${my_age}`);
//c.Boolean
var is_Married = true;
console.log(`I am married :${is_Married}`);
console.log(`type of married is :${typeof is_Married}`);
//d.Undefined
var my_address;
console.log(`my address is:${my_address}`);
console.log(`type of my address is :${typeof my_address}`);
//e.Null
var my_phone_number = null;
console.log(`my phone number is:${my_phone_number}`);
console.log(`type of my phone number is :${typeof my_phone_number}`);
//f.Symbol
var id = Symbol('userID');
var user = {
  name: 'Amit',
  [id]: 101 // Use square brackets for the symbol key
};

console.log(`The user ID is: ${user[id]}`); // Output: 101
console.log(`The user name is: ${user.name}`); // Output: Amit

//g.BigInt
var my_bigint = 1234567890123456789012345678901234567890n;
console.log(`my bigint is:${my_bigint}`);


//to check the nonempty string and truthy value and falsy value
var my_string = "Hello";
if(my_string){
    console.log("this is true");
}
else{
    console.log("this is false");
 }
var string ;
if(string){
    console.log("this is true");
}
else{
    console.log("this is false");
 }

//parseInt and parseFloat
var a="10.9";
console.log(`the value of a is :${a}`);
console.log(`the type of a is :${typeof a}`);
var b=parseInt(a);
console.log(`the value of b is :${b}`);
console.log(`the type of b is:${typeof b}`);
var c=parseFloat(a);
console.log(`the value of c is :${c}`);
console.log(`the type of c is:${typeof c}`);    
var d=("123");//output will be 123 because parseInt will convert the string to number and ignore the leading and trailing spaces
console.log(parseInt(d));
var e=(" 123");//output will be 123 because parseInt will convert the string to number and ignore the leading and trailing spaces
console.log(parseInt(e));
var f=("0123");//output will be 123 because parseInt will convert the string to number and ignore the leading and trailing spaces and leading zero will be ignored
console.log(parseInt(f));
var g=("1.23");//output will be 1 because parseInt will convert the string to number and ignore the leading and trailing spaces and decimal part will be ignored
console.log(parseInt(g));
var h=("123",10);//output 10 
console.log(parseInt(h));
var i=("&12");
console.log(parseInt(i));
var j=("-123");
console.log(parseInt(j));
var k=("jfhjg");
console.log(parseInt(k));

//2. Non-Primitive Data Types
//a.Object
var person = {
    name: "Somu",
    age: 46,
    isMarried: true
};
console.log(`Person's name is :${person.name}`);
console.log(`Person's age is :${person.age}`);
console.log(`Person's marital status is :${person.isMarried}`);
//b.Array
var my_array = [1, 2, 3, 4, 5];
console.log(`my array is :${my_array}`);    
//c.Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Somu")); 
//d.Date
var current_date = new Date();
console.log(`current date is :${current_date}`);


