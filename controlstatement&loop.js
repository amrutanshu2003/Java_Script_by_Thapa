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

