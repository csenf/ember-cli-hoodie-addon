import Ember from 'ember';
import RoutesAccountMixin from 'ember-cli-hoodie-addon/mixins/routes/account';

module('RoutesAccountMixin');

// Replace this with your real tests.
test('it works', function() {
  var RoutesAccountObject = Ember.Object.extend(RoutesAccountMixin);
  var subject = RoutesAccountObject.create();
  ok(subject);
});
