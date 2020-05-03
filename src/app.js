// Import from node_modules
import _ from 'lodash';
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//Import from /src
import App from './views/App.vue';
import router from '@/router';

// Import Styles
import './styles/theme/index.css';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
