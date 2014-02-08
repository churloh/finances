var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
    this.resource('transactions');
    this.resource('reports', function() {
        this.route('category');
        this.route('payee');
    });
});

export default Router;
