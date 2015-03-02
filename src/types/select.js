export default  ngModule => {
  ngModule.config(addSelectType);

  function addSelectType(formlyConfigProvider, formlyBootstrapApiCheck) {
    formlyConfigProvider.setType({
      name: 'select',
      template: require('./select.html'),
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      validateOptions(options) {
        formlyBootstrapApiCheck.warn(formlyBootstrapApiCheck.shape({
          templateOptions: formlyBootstrapApiCheck.shape({
            options: formlyBootstrapApiCheck.arrayOf(formlyBootstrapApiCheck.object),
            labelProp: formlyBootstrapApiCheck.string.optional,
            valueProp: formlyBootstrapApiCheck.string.optional,
            groupProp: formlyBootstrapApiCheck.string.optional
          })
        }), arguments, {
          prefix: 'select type'
        });
      }
    });
  }
};
