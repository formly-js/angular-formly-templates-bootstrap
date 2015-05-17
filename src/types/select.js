export default  ngModule => {
  ngModule.config(addSelectType);

  function addSelectType(formlyConfigProvider, formlyBootstrapApiCheck) {
    const c = formlyBootstrapApiCheck;
    formlyConfigProvider.setType({
      name: 'select',
      template: require('./select.html'),
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions(options) {
        if (options.templateOptions.ngOptions) {
          return {
            ngModelAttrs: {
              [options.templateOptions.ngOptions]: {
                value: 'ng-options'
              }
            }
          };
        }
      },
      apiCheck: {
        templateOptions: c.shape({
          options: c.arrayOf(c.object),
          labelProp: c.string.optional,
          valueProp: c.string.optional,
          groupProp: c.string.optional
        })
      },
      apiCheckInstance: c
    });
  }
};
