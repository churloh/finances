export default Ember.ArrayController.extend({
    needs: 'application',
    itemController: 'transaction',
    saveSuccessful: false,
    availablePayees: function() {
        return this.getUniquePropertyValues('payee');
    }.property('model.@each.payee'),
    availableCategories: function() {
        return this.getUniquePropertyValues('category');
    }.property('model.@each.category'),
    getUniquePropertyValues: function(propertyName) {
        var transactions = this.get('model');
        return transactions.mapBy(propertyName).uniq();
    },
    seedTransaction: function() {
        var account = this.get('controllers.application').get('account');
        var transaction = this.get('store').createRecord('transaction', {
            account: account,
            date: new Date(),
            inflow: '0.00',
            outflow: '0.00'
        });
        this.set('transaction', transaction);
    },
    toggleSaveSuccessful: function() {
        this.toggleProperty('saveSuccessful');
        setTimeout(function() {
            this.toggleProperty('saveSuccessful');
        }.bind(this), 7500);
    },
    actions: {
        saveTransaction: function() {
            var transaction = this.get('transaction');
            transaction.save().then(function(record) {
                var account = this.get('controllers.application').get('account');
                account.get('transactions').pushObject(record);
                this.seedTransaction();
                this.toggleSaveSuccessful();
            }.bind(this));
        }
    }
});
