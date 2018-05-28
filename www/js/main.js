require('../js/services/services');
require('../js/controllers/controllers');
const CONFIG=require('../js/config/config');
const RUN=require('../js/run/run');
// const dashCtrl=require('../modules/tab-adash/dashCtrl');
// const accountCtrl = require('../modules/tab-account/accountCtrl');
// const chatsCtrl=require('../modules/tab-chats/chatsCtrl');
// const chatsDetailCtrl=require('../modules/tab-chats/chat-detail/chatDetailCtrl');
angular.module('starter', ['ionic','starter.services','starter.controllers'])
.run(['$ionicPlatform',RUN])
.config(['$stateProvider','$urlRouterProvider','$controllerProvider',CONFIG])
// .controller('DashCtrl', dashCtrl)
// .controller('ChatsCtrl', chatsCtrl)
// .controller('ChatDetailCtrl',chatsDetailCtrl)
// .controller('AccountCtrl',accountCtrl);


