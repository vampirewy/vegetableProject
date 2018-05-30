'use strict';
module.exports=angular.module('chats',[])
.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('tab.chats',{
    url:'/chats',
    views:{
      'tab-chats':{
        templateProvider:function($q){
          var deferred=$q.defer();
          require.ensure(['./tab-chats.html'],function(require){
            deferred.resolve(require('./tab-chats.html'));
          },'chats-tpl');
          return deferred.promise;
        },
        controller:'ChatsCtrl',
        resolve:{
          'tab.chats':function($q,$ocLazyLoad){
            var deferred=$q.defer();
            require.ensure(['./chatsCtrl.js'],function(){
              $ocLazyLoad.load({name:'chats'});
              deferred.resolve(require('./chatsCtrl'));
            },'chats-ctl');
            return deferred.promise;
          }
        }
      }
    }
  })
}]).name
