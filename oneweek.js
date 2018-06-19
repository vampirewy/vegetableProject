/*
 *上方这题主要涉及到的是变量提升、
 *局部作用域及全局作用域 
 * 1.函数提升比变量提升权重更重；函数声明式是整体提升,第一个alert(a)*实际是alert a函数;
 * 2.第二个alert(a)是弹出变量为a的函数，函数被重写了，当再启动时，值为1;但当var a不被赋值时，alert 2
 * 3.var c=d=a;从右向左赋值; d没用var声明为全局变量，c为函数局部变量,严格模式下d会报错;所以alert(c)是找不到的，会报错 
 */
// + function () {
//   alert(a); //function a(){console.log(2)}
//   a(); //2
//   var a = function () {
//     console.log(1);
//   };

//   function a() {
//     console.log(2);
//   };
//   alert(a); //1
//   a();
//   var c = d = a;
// }();
// alert(d); //1
// alert(c); //not defined

/**
 * 主要是箭头函数及this指针的问题
 * 1.箭头函数this指针指向他作用域上一层继承的this
 * 2.如果test.init函数不用箭头函数，那第一个a应该是40；this谁调就指向谁;第二个this应该是指向了全局；
 * 3.使用了箭头函数，第一个this就指向了全局
 */
this.a = 20;
var test = {
  a: 40,
  init: () => {
    // console.log(this.a); //20

    function go() {
      this.a = 60;
      // console.log(this.a); //60 一直是全局的window,a被重新赋值
    }
    go.prototype.a = 50;
    return go;
  }
};
// var p = test.init(); //function go(){........}
// p();
new(test.init())(); //60  go函数为这个实例的构造函数


/**请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的Cruze
买给了小王价格是14万。*/

/**父类 */
function Car(color, price) {
  this.color = color;
  this.price = price;
};
Car.prototype.sale = function () {
  console.log(`${this.color}卖了${this.price}给${cruze.name}`);
};
/**子类 */
function Cruze(name, color, price) {
  this.name = name;
  Car.call(this, color, price);
};
var pro = Object.create(Car.prototype); //pro.__proto__ === Car.prototype 创建的是变量pro的原型
Cruze.prototype = pro;
Cruze.prototype.constructor = Cruze; //修正构造函数，可以使用属性
var cruze = new Cruze('小王', '红色', 140000);
cruze.sale();

//请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等生以此类推。不允许使用if switch等。
function source(sources, level) {
  var s = Math.round(level - sources / level) == 0 ? Math.round(level - sources / level) + 1 : Math.round(level - sources / level);
  console.log(s);
};
source(100, 10);

//请用一句话遍历变量a。(禁止用for 已知var a = “abc”)
var a = 'abc';
var b = [...a];
var c = Array.from(a);
console.log(b, c);


var s = [];
var arr = s;
/** s===arr */
for (var i = 0; i < 3; i++) {
  var pusher = {
      value: "item" + i
    },
    tmp; //tmp未定义
  if (i !== 2) {
    tmp = [];
    pusher.children = tmp;   //pusher = { children:[],value:'item'+i};
  }
  arr.push(pusher); // arr=s=[{children:[],value:'item0'}]
  arr = tmp;  //arr === children:[];arr!=s 
};
console.log(s[0]);