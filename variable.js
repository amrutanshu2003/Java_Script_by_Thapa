// alert("Hello World");
console.log("Hello World");
//1.Values and Variables in JavaScript

//a.varialbe name start with letter, _ and $.
var _myname = "Somu";
console.log("my name is: "+_myname);
var my_age = 45;
console.log("my age is: "+my_age);
var $from = "India";
console.log(`I am from:${$from}`);
//b.variable name should not start with number and special character.
// var 1myname = "Somu"; //invalid variable name
// var @myname = "Somu"; //invalid variable name var my@name = "Rok";
    //   ^
// SyntaxError: Invalid or unexpected token
//c.variable name should not be a reserved keyword.
// var var = "Somu"; //invalid variable name
// var function = "Somu"; //invalid variable name
//d.variable name should not contain space.
// var my name = "Somu"; //invalid variable name
//e.variable names are case sensitive.
var myName = "Somu";
var myname = "Ram";
console.log(`my Name is :${myName}`);
console.log(`my name is :${myname}`);
//f.variable names are written in camelCase.
var Myname = "jadu";
console.log(`My name is : ${Myname}`);
//g.variable name not start with capital letter.
var myName = "Somu";
console.log(`my name is : ${myName}`);
