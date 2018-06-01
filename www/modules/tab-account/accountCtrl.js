'use strict';
module.exports=angular.module('account')
.controller('AccountCtrl',['$scope',function($scope){
  console.log('这是会员中心');
  $scope.settings = {
    enableFriends: true
  };
}])

