import Ember from 'ember';
import ControllersAccountMixin from 'ember-cli-hoodie-addon/mixins/controllers/account';

module('ControllersAccountMixin');

// Replace this with your real tests.
test('it works', function() {
  var ControllersAccountObject = Ember.Object.extend(ControllersAccountMixin);
  var subject = ControllersAccountObject.create();
  ok(subject);
});
