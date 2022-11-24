import axios from "axios";
import { configs } from "core/configs";
import { StatusCode } from "core/enums";

import { log } from "../log";

// const baseUrl = process.env.REACT_APP_API_LOCALE_AUTH_URL;

// Set config defaults when creating the instance
const http = axios.create({
  baseURL: configs.api.base_url,
});

// `headers` are custom headers to be sent default
http.defaults.headers.post["Content-Type"] = "application/json";

// `timeout` specifies the number of milliseconds before the request times out.
// If the request takes longer than `timeout`, the request will be aborted.

http.defaults.timeout = 300;

// `withCredentials` indicates whether or not cross-site Access-Control requests
// should be made using credentials
http.defaults.withCredentials = false;

// Intercept Request

/* eslint-disable */

http.interceptors.request.use(
  function fn(config: any) {
    // Do something before request is sent
    const authToken = window.localStorage.getItem("access_token");

    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }

    return config;
  },
  function fn(error: any) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Intercept Response

http.interceptors.response.use(
  function fn(response) {
    log(response.data);
    log(response.status);
    log(response.statusText);
    log(response.headers);
    log(response.config);

    if (response) {
      return response.data;
    }
  },
  function fn(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      switch (error.response.status) {
        case StatusCode.BadRequest:
          // Handle BadRequest

          break;
        case StatusCode.Unauthorized:
          // Handle Unauthorized

          // 1. Redirect to login page or
          // 2. Request refresh token
          localStorage.clear();
          window.location.reload();
          break;
        case StatusCode.Forbidden:
          // Handle Forbidden

          break;
        case StatusCode.TooManyRequests:
          // Handle TooManyRequests

          break;
        case StatusCode.InternalServerError:
          // Handle InternalServerError

          break;
        default:
          break;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      log(error.message);
    }
    if (configs.app.appIsDev) log(error.config);
    return Promise.reject(error);
  }
);

/* eslint-enable */

export { http };
