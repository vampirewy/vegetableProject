module.exports=angular.module('tab.chats',[])
.config(function($stateProvider){
  $stateProvider.state('tab.chats',{
    url:'/chats',
    views:{
      'tab-chats':{
        templateProvider:function($q){
          var deferred=$q.defer();
          require.ensure(['./tab-chats.html'],function(require){
            var template=require('./tab-chats.html');
            deferred.resolve(template);
          },'chats-tpl');
          return deferred.promise;
        },
        controller:'ChatsCtrl',
        resolve:{
          'tab.chats':function($q,$ocLazyLoad){
            var deferred=$q.defer();
            require.ensure(['./chatsCtrl.js'],function(){
              var mod=require('./chatsCtrl');
              $ocLazyLoad.load({
                name:'tab.chats'
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
