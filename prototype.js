/**主要是关于原型与原型链的 */
//构造函数
function Person() {
  console.log(111111);
};
Person.prototype.name = 'Mike'; //实例的原型对象
const boy = new Person(); //实例化
console.log(boy);
console.log(Person.prototype === boy.__proto__);

function Boy() {}; //构造函数
var __prto = Object.create(Person.prototype); //复制一份父的原型副本 需要继承的原型 __prto.__proto__===Person.Prototype
__prto.name='hello';
console.log(__prto);
// __prto.constructor = Boy;
// Boy.prototype = __prto; //子类原型继承父类原型
// Boy.prototype.test = function () {};
// Boy.prototype.name='Mary';
// const he = new Boy();
// console.log(he);
// console.log(he.__proto__ === Boy.prototype, Boy.prototype.__proto__ === Person.prototype, Person.prototype.__proto__ === Object.prototype);


// function F(word) {
//  //这边构造会被创建两次，第一次是S原型上，第二次是s实例上
//   this.word = word;
// };
// F.prototype.sayHello = function () {
//   return this.word
// };

// function S(word) {
//   F.call(this, word);
// };
// S.prototype = new F();
// S.prototype.constructor = S;
// S.prototype.sayBye = function () {
//   return this.words
// };
// S.prototype.bey = 'mike';
// var s = new S('hello');
// console.log(s);
// console.log(s.sayHello());
// console.log(s.bey);


var person = {
  friends: ['Mike', 'XiaoMing']
};
var a = Object.create(person);
var b = Object.create(person);
a.friends.push('Wang');
console.log(a);
console.log(b);

