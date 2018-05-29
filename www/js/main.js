'use strict';
require('../js/services/services');
require('./routers/router');
// require('../js/controllers/controllers');
// const CONFIG=require('../js/config/config');


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



