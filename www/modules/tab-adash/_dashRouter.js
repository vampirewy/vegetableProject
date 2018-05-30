'use strict';
module.exports=angular.module('dash',[])
.config(function($stateProvider){
  $stateProvider.state('tab.dash',{
    url:'/dash',
    views:{
      'tab-dash':{
        // templateUrl:'./tab-dash.html',
        templateProvider:function($q){
          var deferred = $q.defer();
          require.ensure(['./tab-dash.html'], function(require) {
            deferred.resolve(require('./tab-dash.html'));
          }, 'dash-tpl');
          return deferred.promise;
        },
        controller:'DashCtrl as vm',
        resolve: {
          'tab.dash': function($q, $ocLazyLoad) {
            var deferred = $q.defer();
            require.ensure(['./dashCtrl.js'], function() {
              $ocLazyLoad.load({name:'dash'});
              deferred.resolve(require('./dashCtrl'));
            }, 'dash-ctl');
            return deferred.promise;
          }
        }
      }
    }
  })
}).name;
