export default ngModule => {
  const template =
    `<select ng-model="model[options.key]" class="form-control">
      <option ng-if="!to.notNull" value="">{{to.nullLabel}}</option>
    </select>`;
  ngModule.config(addSelectType);

  function addSelectType(formlyConfigProvider, formlyBootstrapApiCheck) {
    const c = formlyBootstrapApiCheck;
    // this is much prettier in the latest versions of api-check...
    const nullOrString = c.oneOfType([c.oneOf([null]), c.string]);
    formlyConfigProvider.setType({
      name: 'select',
      template,
      defaultOptions(options) {
        let {valueProp, labelProp, groupProp, options: items, ngOptions} = options.templateOptions;

        if (!ngOptions) {
          let groupBy = '';
          if (groupProp) {
            groupBy = `group by item[to.groupProp]`;
          }
          const forWithFilter = `for item in to.options`;
          ngOptions = `item[to.valueProp] as item[to.labelProp] ${groupBy} ${forWithFilter}`;

          if (items && typeof items[0] === 'string') {
            ngOptions = `item ${groupBy} for item in to.options`;
          } else if (valueProp === null && labelProp) {
            ngOptions = `item as item[to.labelProp] ${groupBy} ${forWithFilter}`;
          }
        }

        return {
          ngModelAttrs: {
            [ngOptions]: {
              value: 'ng-options'
            }
          },
          templateOptions: {
            filter: 'orderBy',
            orderBy: 'name',
            labelProp: 'name',
            valueProp: 'value'
          }
        };
      },
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      apiCheck: {
        templateOptions: c.shape({
          options: c.arrayOf(c.object),
          labelProp: c.string.optional,
          valueProp: nullOrString.optional,
          groupProp: c.string.optional,
          filter: nullOrString.optional,
          notNull: c.bool.optional,
          nullLabel: c.string.optional,
          ngOptions: c.string.optional
        })
      },
      apiCheckInstance: c
    });
  }

};
