angular.module('formlyBootstrap', ['formly'], function configFormlyVanilla(formlyConfigProvider) {
  'use strict';

  formlyConfigProvider.setWrapper([
    {
      name: 'bootstrapLabel',
      templateUrl: 'wrappers/formly-wrappers-bootstrap-label.html'
    },
    {
      name: 'bootstrapHasError',
      templateUrl: 'wrappers/formly-wrappers-bootstrap-has-error.html'
    }
  ]);

  var commonWrappers = ['bootstrapLabel', 'bootstrapHasError'];

  angular.forEach(['radio', 'select'], function(fieldName) {
    formlyConfigProvider.setType({
      name: fieldName,
      templateUrl: getFieldTemplateUrl(fieldName),
      wrapper: commonWrappers
    });
  });
  formlyConfigProvider.setType({
    name: 'input',
    template: '<input class="form-control" ng-model="model[options.key]">',
    wrapper: commonWrappers
  });

  // textarea has custom defaultOptions
  formlyConfigProvider.setType({
    name: 'textarea',
    template: '<textarea class="form-control" ng-model="model[options.key]"></textarea>',
    wrapper: commonWrappers,
    defaultOptions: {
      data: {
        ngModelAttributes: {rows: 'rows', cols: 'cols'}
      }
    }
  });

  // checkbox doesn't have a bootstrapLabel wrapper
  formlyConfigProvider.setType({
    name: 'checkbox',
    templateUrl: getFieldTemplateUrl('checkbox'),
    wrapper: ['bootstrapHasError']
  });

  formlyConfigProvider.templateManipulators.preWrapper.push(function ariaDescribedBy(template, options, scope) {
    if (options.templateOptions && angular.isDefined(options.templateOptions.description) &&
      options.type !== 'radio' && options.type !== 'checkbox') {
      var el = angular.element('<a></a>');
      el.append(template);
      var modelEls = angular.element(el[0].querySelectorAll('[ng-model]'));
      if (modelEls) {
        el.append(
          '<p id="' + scope.id + '_description"' +
              'class="help-block"' +
              'ng-if="options.templateOptions.description">' +
            '{{options.templateOptions.description}}' +
          '</p>'
        );
        modelEls.attr('aria-describedby', scope.id + '_description');
        return el.html();
      } else {
        return template;
      }
    } else {
      return template;
    }
  });

  function getFieldTemplateUrl(name) {
    return 'fields/formly-field-' + name + '.html';
  }

});
