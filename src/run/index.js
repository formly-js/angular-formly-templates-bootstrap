import addons from './addons';
import description from './description';

export default ngModule => {
  addons(ngModule);
  description(ngModule);
};

//export default ngModule => {
//  require('./addons')(ngModule);
//  require('./description')(ngModule);
//};
//
