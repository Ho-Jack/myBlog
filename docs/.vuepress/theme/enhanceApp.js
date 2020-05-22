import routes from 'imRouter/routes';
import importElement from 'imUtils/importElement';

import 'imStyles/palette.styl';
import 'imStyles/index.styl';
import 'imStyles/element-variables.scss';
import 'imStyles/iconfont.css';
import 'imStyles/code.styl';
import 'imStyles/content.styl';

export default ({
  Vue,// VuePress 正在使用的 Vue 构造函数
  router  // 当前应用的路由实例

}) => {
  Vue.use(routes, { router });
  Vue.use(importElement);
};
