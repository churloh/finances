var BalanceIndicatorComponent = Ember.Component.extend({
	tagName: 'span',
	classNames: ['label'],
	classNameBindings: ['isNegative:label-danger:label-success'],
	isNegative: function() {
		return this.get('balance') < 0;
	}.property('balance')
});

export default BalanceIndicatorComponent;