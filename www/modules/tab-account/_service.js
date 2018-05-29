module.exports=angular.module('account',[])
.config(function($stateProvider){
  function LoadHtml(params,deferred){
    require.ensure([params.template],function(require){
      var template=require(params.template);
      deferred.resolve(template);
    },params.name);
    return deferred.promise;
  }
  $stateProvider.state('tab.account',{
    url:'/account',
    views:{
      'tab-account':{
        templateProvider:function($q){
          var deferred=$q.defer();
          require.ensure(['./tab-account.html'],function(require){
            var template=require('./tab-account.html');
            deferred.resolve(template);
          },'account-tpl');
          return deferred.promise;
        },
        // templateProvider:function($q){
        //   var deferred=$q.defer();
        //   LoadHtml({template:'./tab-account.html',name:'account-tpl'},deferred);
        // },
        controller:'AccountCtrl',
        resolve:{
          'tab.account':function($q,$ocLazyLoad){
            var deferred=$q.defer();
            require.ensure(['./accountCtrl.js'],function(){
              var mod=require('./accountCtrl');
              $ocLazyLoad.load({
                name:'account'
              });
              deferred.resolve(mod.controller);
            },'account-ctl');
            return deferred.promise;
          }
        }
      }
    }
  })
}).name
