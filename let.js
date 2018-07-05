"use strict";
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
let arr = [
  {
    name: "10",
    size: "50"
  }, //0
  {
    name: "李",
    size: "65"
  }, //1
  {
    name: "60",
    size: "50"
  }, //2
  {
    name: "张",
    size: "50"
  }, //3
  {
    name: "王",
    size: "60"
  }, //4
  {
    name:'孙',
    size:'80'
  }//5
];
start(arr);
function start(arr) {
  if (arr instanceof Array) {
    let arr1 = [];
    arr.forEach((el, index) => {
      index % 2 == 0 && arr1.push(el);
    });
    sort(arr1);
  } else {
    throw new Error("必须是数组");
  }
}
function sort(item) {
  let arr2 = [];
  item.sort((a, b) => {
    if (b.size == a.size) {
      return b.name - a.name;
    } else {
      return b.size - a.size;
    }
  });
  item.forEach((el1, index1) => {
    arr.forEach((el, index) => {
      el1.name == el.name && arr2.push(el1, arr[index + 1]);
    });
  });
  arr2=arr2.filter((el, index) => {
    if (el) {
      return el;
    }
  });
  console.log(arr2);
}

