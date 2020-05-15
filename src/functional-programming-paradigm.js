/*Functional programming pardigm

----------------------------------------
1. Pure function
----------------------------------------
 * The definition of a pure function is:
a. The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
b. The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.
Side effects include, but are not limited to:
i). Making a HTTP request
ii). Mutating data
iii). Printing to a screen or console
iv). DOM Query/Manipulation
v). Math.random()
vi). Getting the current time
*/

function sum(a, b) {
  return a + b;
}

/*
---------------------------------------------
2. Recursion
--------------------------------------------- 
There are no “for” or “while” loop in functional languages. 
Iteration in functional languages is implemented through recursion. 
Recursive functions repeatedly call themselves, until it reaches the base case
*/
function fibonacci(num, memo) {
  memo = memo || {};

  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
}
/*
------------------------------------------------
3. Referential Transparency 
------------------------------------------------
 In functional programs variables once defined do not change their value throughout the program. 
 Functional programs do not have assignment statements. 
 If we have to store some value, we define new variables instead.
*/
x = x + 1 // this changes the value assigned to the variable x.
// So the expression is not referentially transparent.
/*
------------------------------------------------
4. Functions are First-Class and can be Higher-Order 
-------------------------------------------------
1. First Class functions
a). Be stored in variables
b). Be returned from a function.
c). Be passed as arguments into another function

*/
var add = (x, y) => x + y;
var subtract = (x, y) => x - y;
var multiply = (x, y) => x * y;
function numbers(fn, x, y){
  return fn(x, y);
}
var addResult = numbers(add, 3, 2);
var subtractResult = numbers(subtract, 3, 2);
var multiplyResult = numbers(multiply, 3, 2);
/*
2. High Order Function
is a function that returns another function

*/
function highOrderFunc() {
  return function () {
    alert('hello');
  };
}


