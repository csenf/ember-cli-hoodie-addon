import Ember from 'ember';
import AccountMixin from 'ember-cli-hoodie-addon/mixins/routes/account';

export
default Ember.Route.extend(AccountMixin, {
    model: function () {
        return this.store.find('todo');
    },

    accountError: function (err) {
        var ctrl = this.get('controller');
        ctrl.setFlash(err.message);
    }.on('account-error'),

    actions: {
        createTodo: function () {
            var ctrl = this.get('controller');
            var record = this.store.createRecord('todo', {
                text: ctrl.get('text')
            });

            record.save().then(function () {
                ctrl.set('text', '');
            }, function (err) {
                ctrl.setFlash(err.message);
            });
        },

        destroyTodo: function (todo) {
            todo.destroyRecord();
        }
    }
});