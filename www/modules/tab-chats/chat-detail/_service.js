module.exports=angular.module('chat-detail',[])
.config(function($stateProvider){
  $stateProvider.state('chatDetail',{
    url:'/chats/:chatId',
    templateProvider:function($q){
      var deferred=$q.defer();
      require.ensure(['./chat-detail.html'],function(require){
        var template=require('./chat-detail.html');
        deferred.resolve(template);
      },'chatDetail.tpl');
      return deferred.promise;
    },
    controller:'ChatDetailCtrl',
    resolve:{
      'chat-detail':function($q,$ocLazyLoad){
        var deferred=$q.defer();
        require.ensure(['./chatDetailCtrl.js'],function(){
          var mod=require('./chatDetailCtrl');
          $ocLazyLoad.load({
            name:'chat-detail'
          });
          deferred.resolve(mod.controller);
        },'chatDetail-ctl');
        return deferred.promise;
      }
    }
  })
}).name
