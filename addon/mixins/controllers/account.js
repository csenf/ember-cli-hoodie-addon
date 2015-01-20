import Ember from 'ember';

export
default Ember.Mixin.create({
  user: Ember.Object.create({
    email: null,
    password: null
  }),
});
