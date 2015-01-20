import Ember from 'ember';
import ModelsHoodieModelMixin from 'ember-cli-hoodie-addon/mixins/models/hoodie-model';

module('ModelsHoodieModelMixin');

// Replace this with your real tests.
test('it works', function() {
  var ModelsHoodieModelObject = Ember.Object.extend(ModelsHoodieModelMixin);
  var subject = ModelsHoodieModelObject.create();
  ok(subject);
});
