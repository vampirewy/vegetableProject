'use strict';
module.exports=angular.module('chats')
.controller('ChatsCtrl',['$scope','Chats','$state','$ionicViewSwitcher',function($scope,Chats,$state,$ionicViewSwitcher){
  console.log('列表');
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}])

