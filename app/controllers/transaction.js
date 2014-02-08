var TransactionController = Ember.ObjectController.extend({
    needs: 'application',
    removeTimer: null,
    isPendingRemoval: function() {
        return !!this.get('removeTimer');
    }.property('removeTimer'),
    actions: {
        remove: function(transaction) {
            var account = this.get('controllers.application').get('account');
            var timer = setTimeout(function() {
                transaction.deleteRecord();
                transaction.save().then(function(record) {
                    account.get('transactions').removeObject(record);
                });
            }, 5000);
            this.set('removeTimer', timer);
        },
        undoRemove: function() {
            clearTimeout(this.get('removeTimer'));
            this.set('removeTimer', null);
        }
    }
});

export default TransactionController;
