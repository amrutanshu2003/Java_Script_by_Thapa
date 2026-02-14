console.log("control statements and loops in JavaScript");
// Control statements in JavaScript include:
// 1. If-else statement
let num = 10;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

var age = 19;
var citzen = true;
var voterid = true;
if(age>=18){
    if(citzen) {
        if(voterid){
            console.log("You are eligble for vote");
        }
        else{
            console.log("You are not eligible for vote due to voterid not registered");
        }
    }
    else{
        console.log("Your are not elgible for vote due to citizenship issue!!");
    }
}
else{
    console.log("You are not eligle for vote");
}


//Wrp to check the number is even or odd
var a = 5;
if (a%2==0){
    console.log(`${a} is a Even number.`);
}
else{
    console.log(`${a} is Odd Number. `);
}

//wrp to check a number is positive , negative, zero

var a=0;
if(a>0){
    console.log(`${a} is Positive number`);
}
else if(a==0){
    console.log(`${a} is Zero`);
}
else{
    console.log(`${a} is Negative number`);
}

//check prime number 

let g=121;
if( g>1 && g%2!=0 && g%3!=0 && g%5!=0 && g%7!=0  ||g==2 || g==3 || g==5 || g==7){
    console.log(`${g} is a Prime number`);
}
else{
    console.log(`${g} is not a Prime number`);
}


//2.switch Statement
var day="Suday";

switch(day){

    case "Monday":
        console.log(`Today is :${day}`);
    break;

    case"Sunday":
        console.log(`Today is Sunday`);
    break;

    default:
        console.log("No condition match");
}

var r=8;
var a=20;
var b=10;
var result;
var area_of_shape= "square";
switch(area_of_shape){
    case "circle":
        console.log(`Area of circle is:${3.14*r*r} sq.c.m.`);
    break;
     
    case "rectangle":
        console.log(`The Area of rectangle is:${a*b} sq.c.m.`);
    break;

    case "square":
        console.log(`Area of Square is : ${a*a} sq.c.m.`);
    break;

    default:
        console.log("Please give valid input shape!!");
}

//3.while loop
var i=1;
while(i<=10){
    console.log(`while loop:${i}`);
    i++;
}
//4.do while loop
var j=3;
do{
    console.log(`do while loop:${j}`);
    j++;
}while(j<=10);

//5.for loop
for(var k=1;k<=10;k++){
    console.log(`For Loop: ${k}`);
}

//table of 5
var t=1;
while(t<=13){
    console.log(`5 * ${t} = ${5*t}`);
    t++;
}
//table of 6

for(var m=13;m<=10;m++){
    console.log(`table of 6:  6 * ${m} = ${6*m}`);
}

//table of 7
var n=13;
do{
    console.log(`Table of 7: 7 * ${n} = ${n*7}`);
    n++;
}while(n<=10);

//calculate the sum of numbers from 1 to 10 using for loop
var sum=0;
for(var p=1;p<=10;p++){
    
    var sum = sum + p
}
console.log(`Sum of numbers from 1 to 10: ${sum }`);

//leafyear

var year =1900;
if(year%4==0 && year%100!=0 || year%400==0){
    console.log(`${year} is a leaf year`);
}else{
    console.log(`${year} is not a leaf year`);
}

//* pattern problem
var rows=5;
for(var q=1;q<=rows;q++){
    var pattern="";
    for(var r=1;r<=q;r++){
        pattern += "* ";
    }
    console.log(pattern);
}
