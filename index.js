/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-hoodie-addon',
  included: function (app) {
    this._super.included(app);

    app.import({
      development: app.bowerDirectory + '/hoodie/dist/hoodie.js',
      production: app.bowerDirectory + '/hoodie/dist/hoodie.min.js'
    });
  }
};
