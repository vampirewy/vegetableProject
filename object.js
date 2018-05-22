"use strict";
function a(pageNum,pageSize,obj){
  console.log(arguments);
  console.log(pageNum,pageSize,obj); 
};
//这里可以放置你想要传进函数内的属性,灵活性比较大
var object={
  name:'wy',
  age:'18'
};
//与形参一一对应
a(1,20,object);
//如果传的参数只有一个object,命名参数(形参)均为pageNum=obj,pageSize/obj=undefined
a(object);

var arr=[0,1,5,10,15];
arr.sort();
console.log(arr);