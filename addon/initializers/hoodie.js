/* global Hoodie */

import Ember from 'ember';

export
default {
  name: 'hoodie',
  before: 'store',
  initialize: function (container, application) {
    Ember.assert("ENV.APP.hoodieURL must be set - check your config/environment.js", application.get('hoodieURL'));

    window.hoodie = new Hoodie(application.get('hoodieURL'));
  }
};
