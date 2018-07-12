test = () => {
  const valueList = [{
      setOfData: {
        label_name: 'Functional Area',
        field_name: 'FUNCTIONAL_AREA_1',
        field_value: 'Enterprise Data Governance and Management (EDGM)',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 1',
        field_name: 'LEVEL_1_1',
        field_value: 'Enterprise Data Governance and Management (EDGM)',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 2',
        field_name: 'LEVEL_2_1',
        field_value: 'EDGM Program Management Oversight',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 3',
        field_name: 'LEVEL_3_1',
        field_value: 'Management Oversight',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service ID',
        field_name: 'SERVICE_ID_1',
        field_value: '100383',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Cost Centers',
        field_name: 'COST_CENTERS_1',
        field_value: '7001406;7001406 EDGM;State Street Bank and Trust Company;Y',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Critical Service',
        field_name: 'SVC_CRITICAL_SERVICE_1',
        field_value: 'Yes',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Functional Area',
        field_name: 'FUNCTIONAL_AREA_2',
        field_value: 'Enterprise Data Governance and Management (EDGM)',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 1',
        field_name: 'LEVEL_1_2',
        field_value: 'Enterprise Data Governance and Management (EDGM)',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 2',
        field_name: 'LEVEL_2_2',
        field_value: 'EDGM Program Management Oversight',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 3',
        field_name: 'LEVEL_3_2',
        field_value: 'Management Oversight',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service ID',
        field_name: 'SERVICE_ID_2',
        field_value: '100356',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Cost Centers',
        field_name: 'COST_CENTERS_2',
        field_value: '7872700;DRM Test RC;State Street Bank and Trust Company;-~1044046;Core Ops Dpt IM Outsourcing;State Street Trust and Banking Company Limited;N~2006019;Cayman Alt Inv Accounting Tor;State Street Bank and Trust Company - Canada branch;Y',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {

        label_name: 'Critical Service',
        field_name: 'SVC_CRITICAL_SERVICE_2',
        field_value: 'No',

      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Functional Area',
        field_name: 'FUNCTIONAL_AREA_3',
        field_value: 'Enterprise Data Governance and Management (EDGM)',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 1',
        field_name: 'LEVEL_1_3',
        field_value: 'Enterprise Data Governance and Management (EDGM)',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 2',
        field_name: 'LEVEL_2_3',
        field_value: 'EDGM Program Management Oversight',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service Level 3',
        field_name: 'LEVEL_3_3',
        field_value: 'Management Oversight',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Service ID',
        field_name: 'SERVICE_ID_3',
        field_value: '100356',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {
        label_name: 'Cost Centers',
        field_name: 'COST_CENTERS_3',
        field_value: '7872700;DRM Test RC;State Street Bank and Trust Company;-~1044046;Core Ops Dpt IM Outsourcing;State Street Trust and Banking Company Limited;N~2006019;Cayman Alt Inv Accounting Tor;State Street Bank and Trust Company - Canada branch;Y',
      },
      stateData: {
        a: 1,
        b: 2
      }
    },
    {
      setOfData: {

        label_name: 'Critical Service',
        field_name: 'SVC_CRITICAL_SERVICE_3',
        field_value: 'Yes',

      },
      stateData: {
        a: 1,
        b: 2
      }
    }
  ];
  const fieldsList = ["Service ID", "Functional Area", "Service Level 1", "Service Level 2", "Service Level 3", "Cost Centers", "Critical Service"];
  const nestedFieldName = 'Cost Centers';

  var test = [];
  var costcenter = [];
  var final = [];
  fieldsList.forEach((v, i) => {
    var row = [];

    valueList.forEach((vv, ii) => {
      if (vv.setOfData.label_name === v) {
        if (vv.setOfData.label_name !== 'Cost Centers') {
          row.push({
            name: vv.setOfData.field_name,
            value: vv.setOfData.field_value
          });
        } else {
          costcenter.push(vv);
        }
      }
    });
    test.push(JSON.parse(JSON.stringify(row)));
  });
  console.log('test', test);
  console.log('costcenter', costcenter);
  test.forEach((v, i) => {
    v.forEach((vv, ii) => {
      if (ii === 0) {
        if (final[ii] === undefined) {
          final[ii] = {
            data: []
          };
          final[ii + 1] = {
            data: []
          };
        }
        final[ii].data.push(vv.value);
        final[ii + 1].data = costcenter[ii];
      } else if (ii === 1) {
        if (final[ii + 1] === undefined) {
          final[ii + 1] = {
            data: []
          };
          final[ii + 2] = {
            data: []
          };
        }
        final[ii + 1].data.push(vv.value);
        final[ii + 2].data = costcenter[ii];
      } else {
        if (final[parseInt(2 * ii, 10)] === undefined) {
          final[parseInt(2 * ii, 10)] = {
            data: []
          };
          final[parseInt(2 * ii + 1, 10)] = {
            data: []
          };
        }
        final[parseInt(2 * ii, 10)].data.push(vv.value);
        final[2 * ii + 1].data = costcenter[ii];
      }
    });
  });
  console.log('final', final);
}
test();