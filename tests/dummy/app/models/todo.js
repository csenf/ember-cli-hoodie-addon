import DS from 'ember-data';

export default DS.HoodieModel.extend({
  text: DS.attr('string'),
  completed: DS.attr('boolean', {defaultValue: false})
});
