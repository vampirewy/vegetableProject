'use strict';
require('../less/index'); //如果导入less模块失败，要安装less,less-loader;
require('../js/services/services');
require('./routers/router');
angular.module('starter', ['ionic','services','starter.router',require('oclazyload')])
.run(['$ionicPlatform',require('./run/run')])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    // templateUrl: tabs
    templateProvider:function($q){
      var deferred=$q.defer();
      require.ensure(['../modules/tabs.html'],function(require){
        deferred.resolve(require('../modules/tabs.html'));
      },'tabs-tpl');
      return deferred.promise;
    }
  });
  $urlRouterProvider.otherwise('/tab/dash');
}]).name



