export default Ember.Handlebars.makeBoundHelper(function(value) {
    var money = parseFloat(value, 10);
    return isNaN(money) ? '' : '$' + money.toFixed(2);
});
