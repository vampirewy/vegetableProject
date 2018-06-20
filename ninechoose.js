var teamLists = [{
    number: "1",
    teamName: "英超",
    time: "3:45开赛",
    leftName: "阿森纳",
    rightName: "曼城",
    lists: [{
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
    gameLists: [{
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
    lists: [{
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
    gameLists: [{
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
    lists: [{
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
    gameLists: [{
      name: "3",
      odds: "胜1.54",
      active: true
    }]
  },
  {
    number: "4",
    teamName: "意杯",
    time: "3:45开赛",
    leftName: "拉齐奥",
    rightName: "AC米兰",
    lists: [{
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
    lists: [{
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
    gameLists: [{
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
    lists: [{
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
    gameLists: [{
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
        teamLists[p].gameLists[i].active &&
          (teamLists[p].gameNum += teamLists[p].gameLists[i].name);
      }
    } else {
      teamLists[p].gameNum = "~";
    }
    a = (game += teamLists[p].gameNum + ",").substring(0, game.length - 1);
  }
  return a;
}
var betResult = result(teamLists);

var arr = [
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }],
  [{
    name: "3",
    odds: "胜3.9",
    active: true
  }, {
    name: "3",
    odds: "胜3.9",
    active: true
  }]
  // [{
  //   name: "3",
  //   odds: "胜3.9",
  //   active: true
  // }]
  // [{
  //   name: "3",
  //   odds: "胜3.9",
  //   active: true
  // }]
];
/**带胆的是先去除* */
function sortB(list) {
  console.log(list);
  var r = [];
  var l = [];
  for (var i = 0; i < list.length; i++) {
    var len = r.length;
    for (var j = 0; j < list[i].length; j++) {
      r.push([list[i][j]]);
    };
    for (var x = 0; x < len; x++) {
      for (var y = 0; y < list[i].length; y++) {
        r.push(r[x].concat([list[i][y]]));
      };
    };
  };
  for (var a = 0; a < r.length; a++) {
    (r[a].length === 9) && l.push(r[a]);
  };
  console.log(l);
  return l;
};
sortB(arr);