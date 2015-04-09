export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
    const c = formlyBootstrapApiCheck;
    formlyConfigProvider.setType({
      name: 'multiCheckbox',
      template: require('./multiCheckbox.html'),
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      apiCheck: {
        templateOptions: c.shape({
          options: c.arrayOf(c.object),
          labelProp: c.string.optional,
          valueProp: c.string.optional
        })
      },
      apiCheckInstance: c,
      controller: /* @ngInject */ function($scope) {
        const to = $scope.to;
        const opts = $scope.options;
        $scope.multiCheckbox = {
          checked: [],
          change: setModel
        };

        // initialize the checkboxes check property
        const modelValue = $scope.model[opts.key];
        if (angular.isArray(modelValue)) {
          const valueProp = to.valueProp || 'value';
          angular.forEach(to.options, function(v, index) {
            $scope.multiCheckbox.checked[index] = modelValue.indexOf(v[valueProp]) !== -1;
          });
        }

        function setModel() {
          $scope.model[opts.key] = [];
          angular.forEach($scope.multiCheckbox.checked, (checkbox, index) => {
            if (checkbox) {
              $scope.model[opts.key].push(to.options[index][to.valueProp || 'value']);
            }
          });
        }
      }
    });
  }
};
