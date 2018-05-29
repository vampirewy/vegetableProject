module.exports=angular.module('account',[])
.config(function($stateProvider){
  function Load($q){
    return{
      html:function(params){
        var deferred=$q.defer();
        // require.ensure([params.template],function(require){
        //   var template=require(params.template);
        //   deferred.resolve(template);
        // },params.name);
        // return deferred.promise;
        console.log(1);
      }
    }
  }
  // var a=Load();
  // console.log(a.b());
  $stateProvider.state('tab.account',{
    url:'/account',
    views:{
      'tab-account':{
        // templateProvider:function($q){
        //   var deferred=$q.defer();
        //   require.ensure(['./tab-account.html'],function(require){
        //     var template=require('./tab-account.html');
        //     deferred.resolve(template);
        //   },'chats-tpl');
        //   return deferred.promise;
        // },
        templateProvider:Load().html({template:'./tab-account.html',name:'chats-tpl'}),
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
            },'chats-ctl');
            return deferred.promise;
          }
        }
      }
    }
  })
}).name
