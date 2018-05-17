//label:statement 语句
var num=0;
start:for (var i = 0 ; i < 8 ; i++){
  for (var j = 0 ; j < 8 ; j++){
    if( i == 4 && j == 4 ){
      break start;//当使用label语句与break配合时,循环是整跳出,不再执行;
    }
    num++;  
  }
}
console.log(num);
//label and continue
var num=0;
start:for(var i=0;i<10;i++){
  for(var j=0;j<10;j++){
    if(i==5&&j==5){continue start;}
    num++;
  }
}
console.log(num);

//普通循环语句    
// var num = 0;
// for (var i = 0 ; i < 10 ; i++){
//   for (var j = 0 ; j < 10 ; j++){
//     if( i == 5 && j == 5 ){
//       break;
//     }
//     num++; 
//   }
// }
// console.log(num);
//普通循环语句(上面for循环转换成while循环)
var num=0,i=0;
while(i<8){
  var j=0;
  while(j<8){
    if(i==4&&j==4){break;}//使用for循环时,break只是当前满足条件时退出,但循环还是会继续,直到最后输出;
    num++;
    j++;
  }
  i++;  
}  
console.log(num);
//下方两个循环，结果一样
for(var i=0;i<10;i++);console.log(i);
var i=0;
while(i<10){i++};
console.log(i); 

//函数
/*arguments代表实参，a与b代表命名参数，传参的时候可以不写命名参数，函数内部可以通过arguments直接来访问.
*arguments的长度是由传入的参数决定的，不是由命名参数决定.
*没传值的命名参数=undefined,等同于变量定义了但未初始化.
*/
function Add(a,b){
  if(arguments.length==1){
    document.write(a+10);
  }else if(arguments.length==2){
    arguments[1]=30;//直接改写传进来的20的值为30,此时命名参数b和arguments同为30
    document.write(arguments[1]+b);
  }
};
Add(10,20);


function Add(a,b){
  "use strict"//启用严格模式，必须在脚本第一行，不然失效
  if(arguments.length==1){
    document.write(a+10);
  }else if(arguments.length==2){
    arguments[1]=30;
    console.log(arguments[1]+b); //50
  }

};
Add(10,20);
