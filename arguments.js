// var a = function Num(num) {
//   console.log(arguments);
//   if (num == 0) {
//     return 1;
//   } else {
//     return num * arguments.callee(num - 1);
//   };
// };
// console.log(a(5));

function factorial (n) {
  return !(n > 1) ? 1 : factorial(n - 1) * n;
}
var aray=[1,2,3,4,5].map(factorial);
console.log(aray);
var global = this;

var sillyFunction = function (recursed) {
    if (!recursed) {  return arguments.callee(true); }
    if (this !== global) {
        alert("This is: " + this);
    } else {
        alert("This is the global");
    }
}

sillyFunction();
