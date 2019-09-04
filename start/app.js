// function statement 
function greet() {
          console.log('hi');
}
greet();

// first-class functions & passing function to function 
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

// function expression 
var greetMe = function() {
    console.log('Hello Mateo');
}
greetMe();

// first-class function , adding expression

logGreeting(greetMe);
// use a function expression on the fly
logGreeting(function(){
     console.log('Hi Mateo');
})