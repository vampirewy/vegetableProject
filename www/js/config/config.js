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
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'modules/tab-chats/tab-chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })
  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'modules/tab-chats/chat-detail/chat-detail.html',
        controller: 'ChatDetailCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'modules/tab-account/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
  $urlRouterProvider.otherwise('/tab/dash');
}
