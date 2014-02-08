var LoadingSpinnerComponent = Ember.Component.extend({
    defaults: {
        lines: 10,
        length: 4,
        width: 3,
        radius: 5,
    },
    didInsertElement: function() {
        var options = Ember.$.extend({}, {
            color: this.color
        }, this.defaults);
        this.$().spin(options);
    },
    willDestroyElement: function() {
        this.$().spin(false);
    }
});

export default LoadingSpinnerComponent;