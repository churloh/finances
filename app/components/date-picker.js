export default Ember.Component.extend({
    didInsertElement: function() {
        this.picker = new Pikaday({
            field: this.$('input[type="text"]').get(0),
            format: 'MM/DD/YYYY',
            defaultDate: this.get('date') || new Date(),
            setDefaultDate: true,
            onSelect: this.onDatePickerChange.bind(this)
        });
    },
    onDateChange: function() {
        var preventCallback = true;
        this.picker.setDate(this.get('date'), preventCallback);
    }.observes('date'),
    onDatePickerChange: function() {
        this.set('date', this.picker.getDate());
    },
    willDestroyElement: function() {
        this.picker.destroy();
    }
});
