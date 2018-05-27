require('../js/services/services');
require('../js/controllers/controllers');
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
.run(['$ionicPlatform',require('../js/run/run')])
.config(['$stateProvider','$urlRouterProvider',require('../js/config/config')])


