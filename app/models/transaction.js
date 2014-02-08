export default DS.Model.extend({
	date: DS.attr('date'),
	payee: DS.attr('string'),
	category: DS.attr('string'),
	memo: DS.attr('string'),
	inflow: DS.attr('number'),
	outflow: DS.attr('number'),
	account: DS.belongsTo('account')
});
