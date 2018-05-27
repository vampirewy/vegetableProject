/**这里主要为闭包、变量对象、执行上下文*/
"use strict";
/**
* 1.函数声明式为整体提升,函数表达式变量先提升,函数留在原地
* 2.如果函数名与变量名一致，会忽略变量名(var a;);如果为同名函数，则会覆盖
* 3.JS为词法作用域，当函数定义的时候作用域就已经决定了;动态作用域是函数调用时才决定
*/
// alert(a);
// function a(){console.log('...')};
// var a;

// function a(){alert(1);};
// function a(){alert(2)};
// a();

/** 
* 1.全局中的变量对象(VO)就是全局对象;
* 2.函数中活动对象(AO)=变量对象;活动对象是进入函数上下文时刻被创建的，使用argunments属性初始化;Arugments对象=类数组
* 3.执行过程分为两个阶段：进入执行上下文时，执行代码时
* 4.进入时变量对象包括函数所有形参(命名参数)、函数声明、变量声明
*/

/**
* 1.进入执行上下文时即AO状态为:
* AO={
  arguments:{
    0:1,
    length:1
  },
  a:undefined,
  b:undefined,
  c:function(){},
  d:undefined
}
*  2.代码执行此时AO的状态:
* AO={
  arguments:{
    0:1,
    length:1
  },
  a:1,
  b:3,
  c:function c(){},
  d:function(){}
}
*/

function foo(a){
  //如果变量B不用VAR声明，是不会进入AO的；
  var b=2;
  function c(){};
  var d=function(){};
  b=3;
};
foo(1);

/*作用域链 (函数的作用域是函数定义的时候就决定了---JS为词法作用域)*/
/*1.每个函数都有一个自身属性[[scope]],当函数创建时，会将父变量对象全保存到这个属性中,全局变量是贯穿所有，在任何地方都可见；
* 但这并不是函数完整的作用域链;
* 2.代码不是一行一行执行的，是一段一段执行的;
*/

/*1.函数创建时，各自的[[scope]]属性 
* aScope.[[scope]]={global.VO}; 即var scope='global';
* bScope.[[scope]]={aScope.AO && global.VO};即形参x=undefined,bScope=function bScope(){};var scope='global';
* 2.函数进入执行上下文时,先创建aScope函数执行上下文，把它压入执行上下文栈
*   ESCStack=[
  aSopeContent,
  globalContent
];  
* 3.aScope函数不立即执行,将[[scope]]属性复制并创建作用域链;
* 4.用arguments创建活动对象加入形参、子函数、变量等;
aScopeContent={
  arguments:{
    x:undefined,
    length:1
  },
  bScope:function bScope(){}
}  
* 5.将活动对象压入作用域顶端 scope=[AO,[[scope]]]
* 6.创建bScope函数执行上下文，压入执行上下文栈
*   ESCStack=[
  bScopeContent,
  aSopeContent,
  globalContent
];
* 7.将bScope的[[scope]]属性复制并创建作用域链;
* 8.用arguments创建bScope活动对象并初始化; 
*     bScopeContent={
  arguments:{length:0},    
}
* 9.将活动对象压入作用域链的顶端
* 10.函数执行,修改AO的值 
*/
// var scope='global';
// function aScope(x){
//   // var scope='local';
//   function bScope(){
//     return x;
//   };
//   return bScope();
// };
// var localScope=aScope(1);
// var local=aScope(2);
// console.log(localScope);
// console.log(local);
// alert(localScope==local)

var total=(function(){
  //私有变量
  var num=10;
  //抛出去供外部使用的方法
  return {
    reduce:function(){
      num--
      return num;
    },
    increase:function(){
      num++;
      return num;
    }
  }
})();
total.reduce();
total.reduce();
total.reduce();
var reduce=total.reduce();
console.log(reduce);

function time(s){
  var num=0;
  function timeModify(){
    s++;
    // if(s%5==0){
    //   return '你好';
    // }
    return s;
  }
  function intervalTime(){
    num+=1000;
    return num;
  }
  return {
    goTime:timeModify,
    num:intervalTime
  };
}
var timer=time(0).goTime;
var num=time().num();
console.log(num);
setInterval(function(){
  var a=timer();
  console.log(a);
},num);

var foo='1';
var myObject={
  foo:'2',
  func:function(){
    var a=function(){
      var foo='3';
      return this;
    }();
    console.log(a);
    // (function(){
    //   var foo='3';
    //   console.log(this);
    //   console.log(this.foo);
    // }());
  }
};
myObject.func();

var arr=[1,2,3,2,3,4,5,2,2];
var arr1=[...new Set(arr)];
console.log(arr1);

function a(){
  b=0; //不进入AO
  console.log(b); //b is not defined
};
a();




