export default  ngModule => {
  ngModule.config(addTextareaType);

  function addTextareaType(formlyConfigProvider, formlyBootstrapApiCheck) {
    formlyConfigProvider.setType({
      name: 'textarea',
      template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions: {
        ngModelAttrs: {
          rows: {attribute: 'rows'},
          cols: {attribute: 'cols'}
        }
      },
      validateOptions(options) {
        formlyBootstrapApiCheck.warn(formlyBootstrapApiCheck.shape({
          templateOptions: formlyBootstrapApiCheck.shape({
            rows: formlyBootstrapApiCheck.number.optional,
            cols: formlyBootstrapApiCheck.number.optional
          })
        }), arguments, {
          prefix: 'textarea type'
        });
      }
    });
  }
};
