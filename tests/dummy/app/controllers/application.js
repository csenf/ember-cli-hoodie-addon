import Ember from 'ember';
import Account from 'ember-cli-hoodie-addon/mixins/controllers/account';

export
default Ember.ArrayController.extend(Account, {
  flash: null,

  setFlash: function (message) {
    this.set('flash', message);

    Ember.run.later(this, function () {
      this.set('flash', null);
    }, 3000);
  }
});
