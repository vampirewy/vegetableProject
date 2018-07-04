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
    name: '10',
    size: '50'
  }, //0
  {
    name: '李',
    size: '65'
  }, //1
  {
    name: '60',
    size: '50'
  }, //2
  {
    name: '张',
    size: '50'
  }, //3
];
let arr1 = [];
let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 == 0) {
//     // arr[i].infor = '';
//     arr[i].infor = arr[i + 1];
//     arr1.push(arr[i]);
//   };
// };
// arr.map((el, index) => {
//   if (index % 2 == 0) {
//     arr[index].infor = arr[index + 1];
//   };
//   delete arr[index + 1];
// });
// arr1 = arr.filter((el, index) => {
//   return el;
// });
function start(arr) {
  if (arr instanceof Array) {
    arr.map((el, index) => {
      index % 2 == 0 && (arr[index].infor = arr[index + 1]);
    });
    sort(arr);
  } else {
    console.log(new Error('必须是数组'))
  }
};
start(arr);

function sort(arr) {
  arr.sort((a, b) => {
    if (a.size < b.size) {
      return 1;
    } else if (a.size > b.size) {
      return -1;
    } else {
      if (a.name < b.name) {
        return 1;
      } else if (a.name > b.name) {
        return -1;
      } else {
        return 0;
      };
    };
  });
  reset(arr);
};

function reset(arr) {
  let arr1 = [];
  arr.forEach((el, index) => {
    el.infor && arr1.push(el);
  });
  console.log(arr1);
};

// for (let end = 0; end < arr1.length; end++) {
//   arr2.push(arr1[end], arr1[end].infor);
//   arr2.forEach(value => {
//     delete value.infor;
//   });
// };
// console.log(arr2);