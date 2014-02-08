var ApplicationController = Ember.ObjectController.extend({
	account: null,
	isPageLoading: false,
	currentYear: new Date().getFullYear()
});

export default ApplicationController;