// "use strict";
// function a(pageNum,pageSize,obj){
//   console.log(arguments);
//   console.log(pageNum,pageSize,obj); 
// };
// //这里可以放置你想要传进函数内的属性,灵活性比较大
// var object={
//   name:'wy',
//   age:'18'
// };
// //与形参一一对应
// a(1,20,object);
// //如果传的参数只有一个object,命名参数(形参)均为pageNum=obj,pageSize/obj=undefined
// a(object);

// var arr=[0,1,5,10,15];
// arr.sort();
// console.log(arr);
// function Person(name,age){
//   this.name=name;
//   this.age=age;
//   Person.prototype.run=function(){
//     console.log('跑步');
//   };
//   Person.prototype.eat=function(){
//     console.log('吃');
//   }
// }
// var person=new Person('小明','45');
// console.log(person);
// console.log(person.run());
// console.log(person.eat());

// var Person={
//   model:function(name,age){
//     this.name=name;
//     this.age=age;
//   }
// };
// Person.model.prototype.run=function(name){
//   console.log(`${name}跑步`);
// };
// Person.model.prototype.eat=function(name){
//   console.log(`${name}吃`)
// };
// Person.xiaoming=new Person.model('xiaoming','18');
// console.log(Person.xiaoming.run(Person.xiaoming.name));
// console.log(Person.xiaoming.eat(Person.xiaoming.name));

//立即执行函数
var serial_maker=function(){
  var prefix = '';
  var seq = 0;
  //直接向外抛出三个方法，供外部使用
  return {
    set_prefix: function (p) {
      prefix = String(p);
    },
    set_seq: function (s) {
      seq = s;
    },
    gensym: function ( ) {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  };
}();
var seqer = serial_maker;
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym(); // Q1000
