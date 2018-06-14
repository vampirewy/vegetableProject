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
    console.log(this.a); //20

    function go() {
      this.a = 60;
      console.log(this.a); //60 一直是全局的window,a被重新赋值
    }
    go.prototype.a = 50;
    return go;
  }
};
// var p = test.init(); //function go(){........}
// p();
new (test.init())()  //60  go函数为这个实例的构造函数
  
var teamLists = [
  {
    number: "1",
    teamName: "英超",
    time: "3:45开赛",
    leftName: "阿森纳",
    rightName: "曼城",
    lists: [
      {
        name: "3",
        odds: "胜3.9",
        active: true
      },
      {
        name: "1",
        odds: "平3.8",
        active: true
      },
      {
        name: "0",
        odds: "负3.81",
        active: true
      }
    ],
    gameLists: [
      {
        name: "3",
        odds: "胜3.9",
        active: true
      },
      {
        name: "1",
        odds: "平3.8",
        active: true
      },
      {
        name: "0",
        odds: "负3.81",
        active: true
      }
    ]
  },
  {
    number: "2",
    teamName: "英足总杯",
    time: "3:45开赛",
    leftName: "热刺",
    rightName: "罗奇代",
    lists: [
      {
        name: "3",
        odds: "胜3.9",
        active: true
      },
      {
        name: "1",
        odds: "平8.64",
        active: true
      },
      {
        name: "0",
        odds: "负23.9"
      }
    ],
    gameLists: [
      {
        name: "3",
        odds: "胜3.9",
        active: true
      },
      {
        name: "1",
        odds: "平8.64",
        active: true
      }
    ]
  },
  {
    number: "3",
    teamName: "意杯",
    time: "3:30开赛",
    leftName: "尤文",
    rightName: "亚特兰",
    lists: [
      {
        name: "3",
        odds: "胜1.54",
        active: true
      },
      {
        name: "1",
        odds: "平3.83"
      },
      {
        name: "0",
        odds: "负6.27"
      }
    ],
    gameLists: [
      {
        name: "3",
        odds: "胜1.54",
        active: true
      }
    ]
  },
  {
    number: "4",
    teamName: "意杯",
    time: "3:45开赛",
    leftName: "拉齐奥",
    rightName: "AC米兰",
    lists: [
      {
        name: "3",
        odds: "胜1.87"
      },
      {
        name: "1",
        odds: "平3.45"
      },
      {
        name: "0",
        odds: "负4.06"
      }
    ]
    // gameLists: []
  },
  {
    number: "5",
    teamName: "意杯",
    time: "3:45开赛",
    leftName: "拉齐奥",
    rightName: "AC米兰",
    lists: [
      {
        name: "3",
        odds: "胜1.87",
        active: true
      },
      {
        name: "1",
        odds: "平3.45"
      },
      {
        name: "0",
        odds: "负4.06",
        active: true
      }
    ],
    gameLists: [
      {
        name: "3",
        odds: "胜1.87",
        active: true
      },
      {
        name: "0",
        odds: "负4.06",
        active: true
      }
    ]
  },
  {
    number: "6",
    teamName: "意杯",
    time: "3:45开赛",
    leftName: "拉齐奥",
    rightName: "AC米兰",
    lists: [
      {
        name: "3",
        odds: "胜1.87"
      },
      {
        name: "1",
        odds: "平3.45"
      },
      {
        name: "0",
        odds: "负4.06",
        active: true
      }
    ],
    gameLists: [
      {
        name: "0",
        odds: "负4.06",
        active: true
      },
      {
        name: "1",
        odds: "负4.06",
        active: true
      }
    ]
  }
];
function result(teamLists) {
  var game = "",
    a = "";
  for (var p in teamLists) {
    teamLists[p].gameNum = "";
    if (teamLists[p].gameLists && teamLists[p].gameLists.length) {
      for (var i in teamLists[p].gameLists) {
        teamLists[p].gameLists[i].active && (teamLists[p].gameNum += teamLists[p].gameLists[i].name);
      }
    } else {
      teamLists[p].gameNum = "~";
    }
    a = (game += teamLists[p].gameNum + ",").substring(0, game.length - 1);
  }
  return a;
}
var betResult = result(teamLists);
console.log(betResult);


