'use strict';
// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// };
// a[1]();

// function b() {
//   let a = 1;
//   return function () {
//     let a = 2;
//     return ++a;
//   };
// };
// var result = b()();
// console.log(result);

// let a = 1; {
//   let a = 2;
// };
// function* fibs(){
//   let a=0;
//   let b=1;
//   while(true){
//     yield a;
//     [a,b]=[b,a+b];
//     console.log(a,b);
//   };
// };
// let [first,second,third,four,five,six,seven]=fibs();
// console.log(first,second,third,four,five,six,seven);
// let el = {
//   title: '1',
//   name: 'hello'
// };
// let {
//   title,
//   name
// } = el, gameLists = [];
// gameLists = {
//   title,
//   name
// };
// console.log(gameLists);

// let {x,y=3}={x:1};
// console.log(y);
let arr = [{
    name: '王',
    size: '50'
  }, //0
  {
    name: '李',
    size: '65'
  }, //1
  {
    name: '刘',
    size: '70'
  }, //2
  {
    name: '张',
    size: '45'
  }, //3
];


arr.sort(function (a, b) {
  if (a.size < b.size) {
    return 1
  } else if (a.size > b.size) {
    return -1
  } else {
    return 0
  }
});

console.log(arr);