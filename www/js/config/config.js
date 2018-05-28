'use strict';
module.exports=routerConfig;
function routerConfig($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'modules/tabs.html'
  })
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'modules/tab-adash/tab-dash.html',
        controller: require('../../modules/tab-adash/dashCtrl')
      }
    }
  })
  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'modules/tab-chats/tab-chats.html',
        controller: require('../../modules/tab-chats/chatsCtrl')
      }
    }
  })
  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'modules/tab-chats/chat-detail/chat-detail.html',
        controller: require('../../modules/tab-chats/chat-detail/chatDetailCtrl')
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'modules/tab-account/tab-account.html',
        controller: require('../../modules/tab-account/accountCtrl')
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/dash');
}
