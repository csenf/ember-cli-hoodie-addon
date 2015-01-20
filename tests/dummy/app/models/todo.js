import DS from 'ember-data';
import HoodieModelMixin from 'ember-cli-hoodie-addon/mixins/models/hoodie-model';


export
default DS.Model.extend(HoodieModelMixin, {
  text: DS.attr('string'),
  completed: DS.attr('boolean', {
    defaultValue: false
  })
});
