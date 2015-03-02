export default ngModule => {
  ngModule.run(addAddonsManipulator);

  function addAddonsManipulator(formlyConfig, formlyBootstrapApiCheck) {
    var addonTemplate = require('./addons.html');
    const addonChecker = formlyBootstrapApiCheck.shape({
      class: formlyBootstrapApiCheck.string.optional,
      text: formlyBootstrapApiCheck.string.optional
    }).strict.optional;
    formlyConfig.templateManipulators.preWrapper.push(function(template, options) {
      if (options.type !== 'input' || (!options.templateOptions.addonLeft && !options.templateOptions.addonRight)) {
        return template;
      }
      formlyBootstrapApiCheck.warn(formlyBootstrapApiCheck.shape({
          templateOptions: formlyBootstrapApiCheck.shape({
            addonLeft: addonChecker,
            addonRight: addonChecker
          })
        }), {length: 1, 0: options});
      return addonTemplate.replace('<formly-transclude></formly-transclude>', template);
    });
  }
};
