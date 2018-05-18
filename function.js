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
  /*局部变量obj在函数执行完成后会立即销毁
  *如果需要使用局部变量
  *可以用全局变量接或者使用闭包，直接供外部使用
  */
  function b(){
    return obj;
  }
  return b;
};
var C=a(obj)();
console.log(C);
console.log(obj);


//函数声明式
function c(a,b){
  console.log(c.length) //2,此函数形参的长度，即a,b
  console.log(arguments.length); //0
}
c();

// alert(x); // function
// var x = 10;
// alert(x); // 10
// x = 20;
// function x() {}; //函数X变量提升比var的权重还要高
// alert(x); // 20


//变量对象中包含 var color=undefined和changeColor=undefined这两个对象
/*
*进入执行上下文时
*全局color被赋值成red;
*调用changeColor时，创建了arguments、anotherColor、swapColor这三个活动对象;
*执行时，再被赋值
*/
var color='red';
function changeColor(){
  /*活动对象changeColor的局部环境中包含arguments对象、anotherColor和swapColor两个对象和全局对象;
  *但这个局部环境不能访问swapColor这个活动对象的里的对象;
  */
  var anotherColor='blue';
  function swapColor(){
    /*活动对象swapColor的局部环境包含自己的所有对象(所有变量及函数)和全局对象;
    *changeColor这个和全局color都是可以访问的;
    */
    var tempColor=anotherColor;
    anotherColor=color;
    color=tempColor;
  };
  swapColor();
}
changeColor();


function returnfunc (propertyName) {
  return function (obj) {       
    return obj[propertyName];//这里用方括号法访问属性，因为属性是变量（returnfunc（）函数的参数）
  };
}

var savefunc = returnfunc("name"); //调用returnfunc（）
/**
* 当调用returnfunc时，创建arguments对象、一个function匿名函数和propertyName形参
* propertyName='name';
* 变量savefunc得到是里面那个匿名函数
* 当调用savefunc时，其实已经是调用里面的匿名函数，obj={name:Picasso}
* 但匿名函数里又需引用returnfunc的形参，所以returnfunc还被引用着，无法被销毁
* 返回obj[propertyName]=obj.name=Picasso
*/
var result = savefunc({name:"Picasso"});//调用savefunc（）
alert(result);

// var scope = "global scope";
// function checkscope(){
//   var scope = "local scope";
//   function f(){
//     return scope;
//   }
//   return f;
// }
// checkscope()();

/**
 * vo:data=[] i=3 
 * 
 * 
 */
var data = [];
for (var i = 0; i < 3; i++) {
  data[i] = (function (i) {
    return function(){
      console.log(i);
    }
  })(i);
}
data[0]();
data[1]();
data[2]();

