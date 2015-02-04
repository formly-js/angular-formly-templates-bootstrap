angular.module('formlyBootstrap', ['formly'], function configFormlyVanilla(formlyConfigProvider) {
  'use strict';
  var fields = [
    'input', 'radio', 'select', 'textarea', 'number'
  ];

  formlyConfigProvider.setWrapper([
    {
      name: 'bootstrapDescription',
      templateUrl: 'wrappers/formly-wrappers-bootstrap-description.html'
    },
    {
      name: 'bootstrapLabel',
      templateUrl: 'wrappers/formly-wrappers-bootstrap-label.html'
    },
    {
      name: 'bootstrapHasError',
      templateUrl: 'wrappers/formly-wrappers-bootstrap-has-error.html'
    }
  ]);

  angular.forEach(fields, function(fieldName) {
    formlyConfigProvider.setType({
      name: fieldName,
      templateUrl: 'fields/formly-field-' + fieldName + '.html',
      wrapper: ['bootstrapDescription', 'bootstrapLabel', 'bootstrapHasError']
    });
  });

  // checkbox doesn't have a bootstrapLabel wrapper
  formlyConfigProvider.setType({
    name: 'checkbox',
    templateUrl: 'fields/formly-field-checkbox.html',
    wrapper: ['bootstrapDescription', 'bootstrapHasError']
  });

});
