'use strict';
// module.exports=['$scope','Chats',function($scope, Chats){
//   console.log('列表');
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// }];
module.exports=angular.module('tab.chats')
.controller('DashCtrl',function($scope,Chats){
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

