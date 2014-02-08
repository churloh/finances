module.exports = function(server) {

    // Create an API namespace, so that the root does not 
    // have to be repeated for each end point.
    server.namespace('/api', function() {

        // Return fixture data for '/api/posts/:id'
        server.get('/accounts/:id/transactions', function(req, res) {
            var data = {
                transactions: [{
                    id: 343,
                    date: new Date(),
                    payee: 'Target',
                    category: 'Groceries',
                    memo: 'Sample Memo',
                    inflow: 0.00,
                    outflow: 234.39,
                    account: 1

                }]
            };
            res.send(data);
        });

    });

};
