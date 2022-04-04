import { createApp } from 'vue';
import router from '@/routes/index';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import axiosInstance from '@/api/axios';
import errorHandler from '@/helper/error';

import App from './App.vue';

const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/,
);

const app = createApp(App);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')),
  );

  app.component(componentName, componentConfig.default || componentConfig);
});

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response),
  (error) => {
    if (error.config && error.response && error.response.status >= 500) {
      let retries = 0;
      const { config } = error;
      const maxRetries = 3;
      while (retries < maxRetries) {
        try {
          return new Promise((resolve) => {
            resolve(axiosInstance(config));
          });
        } catch (err) {
          retries += 1;
        }
      }
      return Promise.reject(errorHandler(error));
    }
    if (error.config && error.response && error.response.status === 404) {
      return Promise.reject(new Error('Not found'));
    }
    return Promise.reject(errorHandler(error));
  },
);

app.use(router).mount('#app');
