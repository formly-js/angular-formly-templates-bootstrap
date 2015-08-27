export default  ngModule => {
  ngModule.config(addSelectType);

  const template = `<select class="form-control" ng-model="model[options.key]"></select>`;

  function addSelectType(formlyConfigProvider) {
    formlyConfigProvider.setType({
      name: 'select',
      template,
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      defaultOptions(options) {
        /* jshint maxlen:195 */
        let ngOptions = options.templateOptions.ngOptions || `option[to.valueProp || 'value'] as option[to.labelProp || 'name'] group by option[to.groupProp || 'group'] for option in to.options`;
        return {
          ngModelAttrs: {
            [ngOptions]: {
              value: 'ng-options'
            }
          }
        };
      },
      apiCheck: check => ({
        templateOptions: {
          options: check.arrayOf(check.object),
          labelProp: check.string.optional,
          valueProp: check.string.optional,
          groupProp: check.string.optional
        }
      })
    });
    // multiSelect
    formlyConfigProvider.setType({
      name: 'multiSelect',
      extends: 'select',
      template: '<select multiple class="form-control" ng-model="model[options.key]"></select>'
    });
  }
};
