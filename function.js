function sum(a,b){
    return a+b;
}
console.log(sum(5,10));
console.log(sum(20,30));

function greet(name){
    console.log(`Hello, ${name} ! Welcome to the JavaScript world.`);
}
greet("Ram");
greet("Sita");

//5.function expression
const multiply = function(x,y){
    return x*y;
}
console.log(`multiple of-(5,10): ${multiply(5,10)}`);
console.log(`multiply of-(20,30): ${multiply(20,30)}`);
//6.arrow function
const divide = (a,b) => a/b;
console.log(`divide of-(10,5): ${divide(10,5)}`);
console.log(`divide of-(30,20): ${divide(30,20)}`);
//7.IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("This is an IIFE function. It runs immediately after it's defined.");
})();
//8.anonymous function
setTimeout(function(){
    console.log("This is an anonymous function used in setTimeout.");
}, 2000);
//9.recursive function
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }   else {
        return n * factorial(n-1);
    }
}
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Factorial of 10: ${factorial(10)}`);
//10.callback function
function fetchData(callback){
    setTimeout(() => {      
        const data = { id: 1, name: "John Doe" };
        callback(data);
    }, 2000);
}
fetchData(function(data){
    console.log("Data received:", data);
});

