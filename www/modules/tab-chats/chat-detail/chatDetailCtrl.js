'use strict';

module.exports=angular.module('chat-detail')
.controller('ChatDetailCtrl',['$scope','$stateParams','Chats',function($scope,$stateParams,Chats){
  console.log('成员信息');
  $scope.chat = Chats.get($stateParams.chatId);
}])
