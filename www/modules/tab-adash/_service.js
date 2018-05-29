module.exports=angular.module('tab.dash',[])
.config(function($stateProvider){
  $stateProvider.state('tab.dash',{
    url:'/dash',
    views:{
      'tab-dash':{
        // templateUrl:'./tab-dash.html',
        templateProvider:function($q){
          var deferred = $q.defer();
          require.ensure(['./tab-dash.html'], function(require) {
            var template = require('./tab-dash.html');
            deferred.resolve(template);
          }, 'dash-tpl');
          return deferred.promise;
        },
        controller:'DashCtrl as vm',
        resolve: {
          'tab.dash': function($q, $ocLazyLoad) {
              var deferred = $q.defer();
              require.ensure(['./dashCtrl.js'], function() {
                  var mod = require('./dashCtrl');
                  $ocLazyLoad.load({
                      name: 'tab.dash'
                  });
                  deferred.resolve(mod.controller);
              }, 'dash-ctl');
              return deferred.promise;
          }
      }
      }
    }
  })
}).name;
