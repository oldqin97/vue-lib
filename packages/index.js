import LibFold from './components/LibFold/';
import './style/base.scss';

const cpnList = [LibFold];

function install(Vue) {
  cpnList.forEach(item => {
    Vue.use(item);
  });
}

export { LibFold };

export default install;
