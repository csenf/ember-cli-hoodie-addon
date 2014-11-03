/* global hoodie */
import Ember from 'ember';

function wrapHoodiePromise(promise) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
        promise.then(resolve, reject);
    });
}

export
default Ember.Object.extend({
    hasValidSession: false,

    initializeListeners: function () {
        Ember.run.next(this, function () {
            this._setSession();
        });

        Ember.run.later(this, function () {
            this._setSession();
        }, 10);

        var auth = this;

        hoodie.account.on('authenticated signin signup', function (user) {
            auth.set('hasValidSession', true);
            auth.set('user', user);
        });

        hoodie.account.on('unauthenticated signout', function (user) {
            auth.set('hasValidSession', false);
            auth.set('user', user);
        });
    }.on('init'),

    _setSession: function () {
        this.set('hasValidSession', hoodie.account.hasValidSession());
    },

    signIn: function (username, password) {
        return wrapHoodiePromise(hoodie.account.signIn(username, password));
    },

    signUp: function (username, password) {
        return wrapHoodiePromise(hoodie.account.signUp(username, password));
    },

    signOut: function (options) {
        return wrapHoodiePromise(hoodie.account.signOut(options));
    }
});