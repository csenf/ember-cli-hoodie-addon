/*global Ember */
/*global DS */
/*global hoodie */
(function () {
    'use strict';

    function wrapJqueryPromise(type, jQueryPromise) {
        return new Ember.RSVP.Promise(function (resolve, reject) {
            jQueryPromise.then(function (json) {
                Ember.run(null, resolve, serialize(type, json));
            }, function (error) {
                Ember.run(null, reject, error);
            });
        });
    }

    function serialize(type, payload) {
        var response = {};

        if (Ember.isArray(payload)) {
            type = Ember.String.pluralize(type);
        }

        response[type] = payload;
        return response;
    }

    DS.HoodieAdapter = DS.Adapter.extend({
        defaultSerializer: '-active-model',
        init: function () {
            var store = this.container.lookup('store:main');
            hoodie.remote.on('change', function (event, payload) {
                if (!payload || !payload.type) {
                    return;
                }

                // Ignore _design
                if (payload.type[0] === '_') {
                    return;
                }

                if (event === 'update' || event === 'add') {
                    store.pushPayload(payload.type, serialize(payload.type, payload));
                } else if (event === 'remove') {
                    var record = store.getById(payload.type, payload.id);
                    if (record) {
                        record.unloadRecord();
                    }
                }
            });
        },

        find: function (store, type, id /*, opts*/ ) {
            return wrapJqueryPromise(type.typeKey, hoodie.store.find(type.typeKey, id));
        },

        findAll: function (store, type) {
            return wrapJqueryPromise(type.typeKey, hoodie.store.findAll(type.typeKey));
        },

        createRecord: function (store, type, record) {
            return wrapJqueryPromise(type.typeKey, hoodie.store.add(type.typeKey, record.toJSON()));
        },

        updateRecord: function (store, type, record) {
            return wrapJqueryPromise(type.typeKey, hoodie.store.update(type.typeKey, record.id, record.toJSON()));
        },

        deleteRecord: function (store, type, record) {
            return wrapJqueryPromise(type.typeKey, hoodie.store.remove(type.typeKey, record.id));
        }
    });

    DS.HoodieModel = DS.Model.extend({
        _rev: DS.attr('string'),
        createdAt: DS.attr('date'),
        updatedAt: DS.attr('date'),
        createdBy: DS.attr('string')
    });
}());