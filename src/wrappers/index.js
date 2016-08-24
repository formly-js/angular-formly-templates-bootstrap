export default ngModule => {
  ngModule.config(addWrappers);

  function addWrappers(formlyConfigProvider) {
    formlyConfigProvider.setWrapper([
      {
        name: 'bootstrapLabel',
        template: require('./label.html'),
        apiCheck: check => ({
          templateOptions: {
            label: check.string.optional,
	    labelClass: check.string.optional,
            required: check.bool.optional,
            labelSrOnly: check.bool.optional,
	    fieldDivClass: check.string.optional
          }
        })
      },
      {name: 'bootstrapHasError', template: require('./has-error.html')}
    ]);
  }
};
