"use strict";
// var a = [];
// for (let i = 0; i < 10; i++) {
//   a[i] = function () {
//     console.log(i);
//   };
// };
// a[1]();

// function b() {
//   let a = 1;
//   return function () {
//     let a = 2;
//     return ++a;
//   };
// };
// var result = b()();
// console.log(result);

// let a = 1; {
//   let a = 2;
// };
// function* fibs(){
//   let a=0;
//   let b=1;
//   while(true){
//     yield a;
//     [a,b]=[b,a+b];
//     console.log(a,b);
//   };
// };
// let [first,second,third,four,five,six,seven]=fibs();
// console.log(first,second,third,four,five,six,seven);
// let el = {
//   title: '1',
//   name: 'hello'
// };
// let {
//   title,
//   name
// } = el, gameLists = [];
// gameLists = {
//   title,
//   name
// };
// console.log(gameLists);

// let {x,y=3}={x:1};
// console.log(y);
// let arr = [
//   {
//     name: "10",
//     size: "50"
//   }, //0
//   {
//     name: "李",
//     size: "65"
//   }, //1
//   {
//     name: "60",
//     size: "50"
//   }, //2
//   {
//     name: "张",
//     size: "50"
//   }, //3
//   {
//     name: "王",
//     size: "60"
//   }, //4
//   {
//     name: "孙",
//     size: "80"
//   } //5
// ];
// start(arr);
// function start(arr) {
//   if (arr instanceof Array) {
//     let arr1 = [];
//     arr.forEach((el, index) => {
//       index % 2 == 0 && arr1.push(el);
//     });
//     sort(arr1);
//   } else {
//     throw new Error("必须是数组");
//   }
// }
// function sort(item) {
//   let arr2 = [];
//   item.sort((a, b) => {
//     return b.size == a.size ? b.name - a.name : b.size - a.size;
//   });
//   item.forEach((newEl, newIndex) => {
//     arr.forEach((oldEl, oldIndex) => {
//       newEl.name == oldEl.name && arr2.push(newEl, arr[oldIndex + 1]);
//     });
//   });
//   arr2 = arr2.filter(el => el);
//   console.log(arr2);
// }

// let obj={name:'程序',age:{a:1}};
// let copy=Object.assign({},obj);
// let obj1={name:'111',b:[1,2]};
// let copy1=Object.assign({},obj1);
// obj1.b[0]=4;
// // copy1.method();
// // copy.age.a=3;
// // copy.name='程序1';
// // console.log(obj.age.a===copy.age.a);
// // console.log(copy);
// console.log(copy1.b);
// console.log(obj1.b);
// console.log(copy1.b===obj1.b);

// let arr=[{a:1,b:2,c:3}];
// let arr1=Object.assign([],arr);
// arr.push({d:4});
// console.log(arr1===arr);


async function print(value, ms) {
  await new Promise(resolve => {
    setTimeout(resolve, ms);
  });
  console.log(value);
};
print('hello world', 50);

outData = [{
    data: ["100383", "Enterprise Data Governance and Management (EDGM)", "Enterprise Data Governance and Management (EDGM)", "EDGM Program Management Oversight", "Management Oversight", "Yes"],
    visibal: true,
    isNested: false,
    isActive: true
  },
  {
    data: [{
        setOfData: {
          label_name: "Functional Area",
          field_name: "FUNCTIONAL_AREA_1",
          field_value: "Enterprise Data Governance and Management (EDGM)",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service Level 1",
          field_name: "LEVEL_1_1",
          field_value: "Enterprise Data Governance and Management (EDGM)",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service Level 2",
          field_name: "LEVEL_2_1",
          field_value: "EDGM Program Management Oversight",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service Level 3",
          field_name: "LEVEL_3_1",
          field_value: "Management Oversight",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service ID",
          field_name: "SERVICE_ID_1",
          field_value: "100383",
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Cost Centers",
          field_name: "COST_CENTERS_1",
          field_value: "7001406;7001406 EDGM;State Street Bank and Trust Company;Y",
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Critical Service",
          field_name: "SVC_CRITICAL_SERVICE_1",
          field_value: "Yes",
        },
        stateData: {
          a: 1,
          b: 2
        }
      }
    ],
    visible: false,
    isNested: true
  },
  {
    data: ["100356", "Enterprise Data Governance and Management (EDGM)", "Enterprise Data Governance and Management (EDGM)", "EDGM Program Management Oversight", "Management Oversight", "Yes"],
    visibal: true,
    isNested: false,
    isActive: true
  },
  {
    data: [{
        setOfData: {
          label_name: "Functional Area",
          field_name: "FUNCTIONAL_AREA_2",
          field_value: "Enterprise Data Governance and Management (EDGM)",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service Level 1",
          field_name: "LEVEL_1_2",
          field_value: "Enterprise Data Governance and Management (EDGM)",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service Level 2",
          field_name: "LEVEL_2_2",
          field_value: "EDGM Program Management Oversight",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service Level 3",
          field_name: "LEVEL_3_2",
          field_value: "Management Oversight",
          service_status: "ACTIVE"
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Service ID",
          field_name: "SERVICE_ID_2",
          field_value: "100356",
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Cost Centers",
          field_name: "COST_CENTERS_2",
          field_value: "7001406;7001406 EDGM;State Street Bank and Trust Company;Y",
        },
        stateData: {
          a: 1,
          b: 2
        }
      },
      {
        setOfData: {
          label_name: "Critical Service",
          field_name: "SVC_CRITICAL_SERVICE_3",
          field_value: "Yes",
        },
        stateData: {
          a: 1,
          b: 2
        }
      }
    ],
    visible: false,
    isNested: true
  }
];