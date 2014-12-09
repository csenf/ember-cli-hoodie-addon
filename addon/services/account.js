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
        var auth = this;

        hoodie.account.on('authenticated signin signup', function ( /*user*/ ) {
            auth.updateSession();
        });

        hoodie.account.on('error:unauthenticated signout', function ( /*user*/ ) {
            auth.updateSession();
        });

        this.updateSession();
    }.on('init'),

    updateSession: function () {
        var user;

        if (hoodie.account.hasAccount()) {
            user = {
                email: hoodie.account.username
            };
        }

        this.set('hasValidSession', hoodie.account.hasAccount());
        this.set('user', user);
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