export default ngModule => {
  ngModule.config(addWrappers);

  function addWrappers(formlyConfigProvider) {
    formlyConfigProvider.setWrapper([
      {name: 'bootstrapLabel', template: require('./label.html')},
      {name: 'bootstrapHasError', template: require('./has-error.html')}
    ]);
  }
};
