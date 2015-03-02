export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider, formlyBootstrapApiCheck) {
    formlyConfigProvider.setType({
      name: 'multiCheckbox',
      template: require('./multiCheckbox.html'),
      wrapper: ['bootstrapLabel', 'bootstrapHasError'],
      validateOptions(options) {
        formlyBootstrapApiCheck.warn(formlyBootstrapApiCheck.shape({
          templateOptions: formlyBootstrapApiCheck.shape({
            options: formlyBootstrapApiCheck.arrayOf(formlyBootstrapApiCheck.object),
            labelProp: formlyBootstrapApiCheck.string.optional,
            valueProp: formlyBootstrapApiCheck.string.optional
          })
        }), arguments, {
          prefix: 'multiCheckbox type'
        });
      },
      controller: /* @ngInject */ function($scope) {
        const to = $scope.to;
        const opts = $scope.options;
        $scope.multiCheckbox = {
          checked: [],
          change: setModel
        };

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
