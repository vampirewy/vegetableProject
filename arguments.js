'use strict';
// var a = function Num(num) {
//   console.log(arguments);
//   if (num == 0) {
//     return 1;
//   } else {
//     return num * arguments.callee(num - 1);
//   };
// };
// console.log(a(5));

// function factorial(n) {
//     return !(n > 1) ? 1 : factorial(n - 1) * n;
// }
// var aray = [1, 2, 3, 4, 5].map(factorial);
// console.log(aray);
// var global = this;

// var sillyFunction = function (recursed) {
//     if (!recursed) {
//         return arguments.callee(true);
//     }
//     if (this !== global) {
//         alert("This is: " + this);
//     } else {
//         alert("This is the global");
//     }
// }

// sillyFunction();
/**函数a被重新赋值 */
// function a() {
//     console.log(1111)
// };

// a = function () {
//     console.log(2222222)
// };

// var color = 'red';
// var a = {
//     color: 'blue'
// };

// function b() {
//     console.log(this.color);
// };
// console.log(b.bind(this)()); //red
// console.log(b.bind(a)()); //blue
// var test='cat, bat,sat,fat';
// var result=test.replace(/(.at)/g,"word ($1)");
// console.log(result);

function a(source,totalLevel){
    // var level;
    return function(){
        return totalLevel-(Math.floor(source/totalLevel));
    };
}
var result=a(100,10);
console.log(result());