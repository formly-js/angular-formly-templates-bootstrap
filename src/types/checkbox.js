export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
    formlyConfigProvider.setType({
      name: 'checkbox',
      template: require('./checkbox.html'),
      wrapper: ['bootstrapHasError'],
      validateOptions(options) {
        formlyBootstrapApiCheck.warn(formlyBootstrapApiCheck.shape({
          templateOptions: formlyBootstrapApiCheck.shape({
            label: formlyBootstrapApiCheck.string
          })
        }), arguments, {
          prefix: 'checkbox type'
        });
      }
    });
  }
};
