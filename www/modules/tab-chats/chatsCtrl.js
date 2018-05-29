'use strict';
module.exports=angular.module('tab.chats')
.controller('ChatsCtrl',function($scope,Chats,$state,$ionicViewSwitcher){
  console.log('列表');
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

