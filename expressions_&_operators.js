console.log("Expressions and Operators");

// Expressions are the building blocks of JavaScript code. They are combinations of values, variables, and operators that produce a new value.
//  Operators are symbols that perform specific operations on operands (values or variables).
//types of operators in JavaScript include:
// 1. Arithmetic Operators: +, -, *, /, %, ++, --
let a = 10;
let b = 5;
console.log("a + b =", a + b); // 15
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a++ =", a++);
console.log("++a =", ++a);
console.log("a-- =", a--);
console.log("--a =", --a);
console.log("a =", a);
// 2. Assignment Operators: =, +=, -=, *=, /=, %=
let c = 20;
c += 5; // c = c + 5
console.log("c after += 5:", c);    
c -= 3; // c = c - 3
console.log("c after -= 3:", c);    
c *= 2; // c = c * 2
console.log("c after *= 2:", c);    
c /= 4; // c = c / 4
console.log("c after /= 4:", c);    
c %= 3; // c = c % 3
console.log("c after %= 3:", c);    

// 3. Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
let x = 10;
let y = "10";
console.log(`x==y is:${x==y}`);
console.log(`x===y is:${x===y}`);
console.log(`x!=y is:${x!=y}`);
console.log(`x!==y is:${x!==y}`);
console.log(`x>y is:${x>y}`);
console.log(`x<y is:${x<y}`);
console.log(`x>=y is:${x>=y}`);
console.log(`x<=y is:${x<=y}`);
// 4. Logical Operators: &&, ||, !
let p = true;
let q = false;
console.log(`p&&q is:${p&&q}`);
console.log(`p||q is:${p||q}`);
console.log(`!p is:${!p}`);
// 5. Bitwise Operators: &, |, ^, ~, <<, >>, >>>
let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log("m & n =", m & n); // 1 (0001 in binary)
console.log("m | n =", m | n); // 7 (0111 in binary)
console.log("m ^ n =", m ^ n);  // 6 (0110 in binary)       
console.log("~m =", ~m);    // -6 (inverts bits)
console.log("m << 1 =", m << 1); // 10 (0101 shifted left becomes 1010) 
console.log("m >> 1 =", m >> 1); // 2 (0101 shifted right becomes 0010)
console.log("m >>> 1 =", m >>> 1); // 2 (0101 shifted right becomes 0010, zero-filled)

// 6. Ternary Operator: condition ? expression1 : expression2
let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);
// 7. Type Operators: typeof, instanceof
let str = "Hello, World!";
console.log("Type of str:", typeof str);
let arr = [1, 2, 3];
console.log("Type of arr:", typeof arr);
console.log("arr instanceof Array:", arr instanceof Array);
// 8. unary Operators: +, -, ++, --, typeof, delete, void
var num = 5;
console.log("Unary +num:", +num);   
console.log("Unary -num:", -num);
console.log("num++:", num++);
console.log("++num:", ++num);
console.log("typeof num:", typeof num);

// 9.string operators..
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2; 
console.log(result); // Output: "Hello World"

var num ="hello" /2;
console.log(`The result is:${num}`);

var h=0.1+0.2;//output is 0.30000000000000004 because of the way JavaScript handles floating-point arithmetic, which can lead to precision issues.
console.log(`The result is:${h}`);

var d=55%"hello";
console.log(`The result is:${d}`);

console.log(`the result is :${5==5}`);
console.log(`the result is :${5==="5"}`)
console.log(`the result is :${10==45}`);


console.log(`the result is :${10<"ug"}`);
console.log(10<"ugpolkk");//false because when comparing a number with a string, JavaScript tries to convert the string to a number. Since "ugpolkk" cannot be converted to a valid number, it becomes NaN (Not-a-Number). Any comparison with NaN results in false.

const age1 = 19;
const havedrivinglicense = true;
if (age1>=18 && havedrivinglicense){
    console.log(`you are eligible for driving`);
}
else{
    console.log(`you are not eligible for driving`);
}

var score =50;
var result1 = (score >=60)? "pass":"fail";
console.log(`the result is:${result1}`); 

console.log("hello" + 5); // Output: "hello5"
console.log(2 >15 >-1);
console.log("5k"+10+39);
console.log(5/false);
console.log(false + Infinity);
console.log(("5") - 3);