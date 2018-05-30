'use strict';
module.exports=angular.module('starter.router',[
  require('../../modules/tab-adash/_dashRouter'),
  require('../../modules/tab-chats/_chatsRouter'),
  require('../../modules/tab-chats/chat-detail/_chatsDetailRouter'),
  require('../../modules/tab-account/_accountRouter')
])
