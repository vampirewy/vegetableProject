'use strict';
require('../js/services/services');
require('./routers/router');
angular.module('starter', ['ionic','services','starter.controllers',require('oclazyload')])
.run(['$ionicPlatform',require('./run/run')])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'modules/tabs.html'
  });
  $urlRouterProvider.otherwise('/tab/dash');
}])



