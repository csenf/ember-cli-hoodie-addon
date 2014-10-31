import Ember from 'ember';

export
default Ember.Mixin.create(Ember.Evented, {
    actions: {
        signIn: function (email, password) {
            this.accountService.signIn(email, password).catch(function (err) {
                this.trigger('account-error', err);
            }.bind(this));
        },

        signUp: function (email, password) {
            this.accountService.signUp(email, password).catch(function (err) {
                this.trigger('account-error', err);
            }.bind(this));
        },

        signOut: function () {
            this.accountService.signOut().catch(function (err) {
                this.trigger('account-error', err);
            }.bind(this));
        }
    }
});