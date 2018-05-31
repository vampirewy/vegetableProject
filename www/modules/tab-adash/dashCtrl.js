'use strict';
module.exports=angular.module('dash')
.controller('DashCtrl',['$scope',function($scope){
  console.log('首页');
  // $scope.text='你好';
  this.text='你好';
}])
