export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    transactions: DS.hasMany('transaction', {
        async: true
    }),
    fullName: function() {
        var fullName = this.get('firstName') + ' ' + this.get('lastName');
        return fullName;
    }.property('firstName', 'lastName'),
    balance: function() {
        var transactions = this.get('transactions');
        var balance = transactions.reduce(function(sum, transaction) {
            return sum + (transaction.get('inflow') - transaction.get('outflow'));
        }, 0);
        return balance;
    }.property('transactions.@each.inflow', 'transactions.@each.outflow'),
    categories: function() {
        var transactions = this.get('transactions');
        return transactions.mapBy('category').uniq();
    }.property('transactions.@each.category'),
    payees: function() {
        var transactions = this.get('transactions');
        return transactions.mapBy('payee').uniq();
    }.property('transactions.@each.payee')
});
