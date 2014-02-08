export default Ember.Handlebars.makeBoundHelper(function(value) {
    var date = moment(value).format('M/DD/YY');
    return date;
});
