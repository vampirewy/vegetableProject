'use strict';
module.exports=angular.module('chat-detail',[])
.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('chatDetail',{
    url:'/chats/:chatId',
    templateProvider:function($q){
      var deferred=$q.defer();
      require.ensure(['./chat-detail.html'],function(require){
        deferred.resolve(require('./chat-detail.html'));
      },'chatDetail.tpl');
      return deferred.promise;
    },
    controller:'ChatDetailCtrl',
    resolve:{
      'chat-detail':function($q,$ocLazyLoad){
        var deferred=$q.defer();
        require.ensure(['./chatDetailCtrl.js'],function(){
          $ocLazyLoad.load({name:'chat-detail'});
          deferred.resolve(require('./chatDetailCtrl'));
        },'chatDetail-ctl');
        return deferred.promise;
      }
    }
  })
}]).name
