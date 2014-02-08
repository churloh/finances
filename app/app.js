import Resolver from 'resolver';

var App = Ember.Application.extend({
    LOG_ACTIVE_GENERATION: true,
    LOG_MODULE_RESOLVER: true,
    LOG_TRANSITIONS: true,
    LOG_TRANSITIONS_INTERNAL: true,
    LOG_VIEW_LOOKUPS: true,
    modulePrefix: 'appkit', // TODO: loaded via config
    Resolver: Resolver['default']
});


Ember.Application.initializer({
    name: 'currentAccount',
    initialize: function(container) {
        var store = container.lookup('store:main');
        var account = store.push('account', {
            id: 1,
            firstName: 'Adam',
            lastName: 'Smith',
            links: {
                transactions: 'transactions'
            }
        });
        container.lookup('controller:application').set('account', account);
    }
});

export default App;
