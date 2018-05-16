//label:statement 语句
var num=0;
start:for (var i = 0 ; i < 8 ; i++){
  for (var j = 0 ; j < 8 ; j++){
    if( i == 4 && j == 4 ){
      break start;
    }
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
    if(i==4&&j==4){break;}
    num++;
    j++;
  }
  i++;  
}  
console.log(num);