export default Ember.Route.extend({
    model: function() {
        var account = this.controllerFor('application').get('account');
        return account.get('transactions');
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.seedTransaction();
    }
});
