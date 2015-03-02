export default ngModule => {
  ngModule.config(addRadioType);

  function addRadioType(formlyConfigProvider, formlyBootstrapApiCheck) {
    formlyConfigProvider.setType({
      name: 'radio',
      template: require('./radio.html'),
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      validateOptions(options) {
        formlyBootstrapApiCheck.warn(formlyBootstrapApiCheck.shape({
          templateOptions: formlyBootstrapApiCheck.shape({
            options: formlyBootstrapApiCheck.arrayOf(formlyBootstrapApiCheck.object),
            labelProp: formlyBootstrapApiCheck.string.optional,
            valueProp: formlyBootstrapApiCheck.string.optional
          })
        }), arguments, {
          prefix: 'radio type'
        });
      }
    });
  }
};
