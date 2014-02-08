export default Ember.TextField.extend({
    required: false,
    attributeBindings: ['required'],
    didInsertElement: function() {
        this.initializeAutoComplete();
    },
    willDestroyElement: function() {
        this.destroyAutoComplete();
    },
    initializeAutoComplete: function() {
        this.$().typeahead({
            local: this.get('source')
        });
    },
    destroyAutoComplete: function() {
        this.$().typeahead('destroy');
    },
    reload: function() {
        this.destroyAutoComplete();
        this.initializeAutoComplete();
    }.observes('source')
});
