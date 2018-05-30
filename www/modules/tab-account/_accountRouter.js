'use strict';
module.exports=angular.module('account',[])
.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('tab.account',{
    url:'/account',
    views:{
      'tab-account':{
        templateProvider:function($q){
          var deferred=$q.defer();
          require.ensure(['./tab-account.html'],function(require){
            deferred.resolve(require('./tab-account.html'));
          },'account-tpl');
          return deferred.promise;
        },
        controller:'AccountCtrl',
        resolve:{
          'tab.account':function($q,$ocLazyLoad){
            var deferred=$q.defer();
            require.ensure(['./accountCtrl.js'],function(){
              $ocLazyLoad.load({name:'account'});
              deferred.resolve(require('./accountCtrl'));
            },'account-ctl');
            return deferred.promise;
          }
        }
      }
    }
  })
}]).name
