import Ember from 'ember';
import DS from 'ember-data';

export
default Ember.Mixin.create({
  _rev: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  createdBy: DS.attr('string')
});
