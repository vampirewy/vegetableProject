//所有函数的参数都是按值传递
"use strict"
// var arr=[1,2,3];
// function Add(arr){
//   // var newArr=[];
//   // for(var i=0;i<arr.length;i++){
//   //   arr[i]+=1;
//   //   newArr.push(arr[i]);
//   // }
//   // console.log(arr==newArr);//false 
//   var arr1=[];
//   for(var i=0;i<arguments[0].length;i++){
//     arr1.push(arguments[0][i]+=1);
//   };
//   console.log(arr1==arguments[0]);//false
//   console.log(arr==arguments[0]); //true
// };  
// Add(arr);
var obj={value:1};
function a(obj){
  /*命名参数obj是局部变量,当我传递进去一个引用类型的对象后
  *其实局部变量obj={value:1},然后局部变量将obj.value=1赋值成obj.value=2
  *因为全局obj与obj这个局部变量引用的地址是同一个
  *所以全局变量的值被改变了；
  */
  obj.value=2;
  /*因为obj是局部变量，又被赋值成基础类型的值,所以在这输出时，值就变为2
  * 如果这边局部变量obj={},等于内存中又增加了一个新的空间
  * 与全局变量obj并不是同一个引用地址
  * 所以并不会改变全局obj的引用的值
  */
  obj={};
  //当局部变量obj，在函数a()执行完成后，就会被立马销毁
  console.log(obj);
};
a(obj);
console.log(obj);



