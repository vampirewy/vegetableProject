/**主要是关于原型与原型链的 */
//构造函数
// function Person() {
//   console.log(111111);
// };
// Person.prototype.name = 'Mike'; //实例的原型对象
// const boy = new Person(); //实例化
// console.log(boy);
// console.log(Person.prototype === boy.__proto__);

// function Boy() {}; //构造函数
// // var __prto = Object.create(Person.prototype); //复制一份父的原型副本
// // __prto.constructor = Boy;
// // Boy.prototype = __prto; //子类原型继承父类原型
// // Boy.prototype.test = function () {}
// // const he = new Boy();
// // console.log(he);
// // console.log(he.__proto__ === Boy.prototype);                                                                                                 
// function __prto() {};
// __prto.prototype = Person.prototype;
// Boy.prototype = new __prto();
// Boy.prototype.test = function () {};
// const he = new Boy();
// console.log(he);

function Person(){};
Person.prototype={
  constructor:Person,
  name:'Mike',
  sayName:function(){
    console.log(this.name);
  }
};
const friend=new Person();
console.log(friend.sayName());
