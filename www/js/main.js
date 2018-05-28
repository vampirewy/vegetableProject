require('../js/services/services');
const CONFIG=require('../js/config/config');
const RUN=require('../js/run/run');
angular.module('starter', ['ionic','starter.services'])
.run(['$ionicPlatform',RUN])
.config(['$stateProvider','$urlRouterProvider',CONFIG])


