import axiosInstance from '@/api/axios';
import errorHandler from '@/helper/error';

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
    return Promise.reject(errorHandler(error));
  },
);
