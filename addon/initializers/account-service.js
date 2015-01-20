export
default {
  name: 'account-service',
  after: 'hoodie',
  initialize: function (container, application) {
    application.inject('route', 'accountService', 'service:account');
    application.inject('controller', 'accountService', 'service:account');
    application.inject('template', 'accountService', 'service:account');
  }
};
