const ENV = process.env;

export const configs = {
  env: ENV,
  app: {
    appType: ENV.NODE_ENV,
    appVersion: ENV.REACT_APP_VERSION,
    appIsDev: ENV.REACT_APP_ENV !== "production",
  },
  lang: {
    initial: "uz",
    list: ["uz", "oz", "ru", "en"],
  },
  list: {
    current: 1,
    size: 20,
  },
  api: {
    base_url: ENV.REACT_APP_API_BASE_URL,
    auth_url: ENV.REACT_APP_API_AUTH_URL,
  },
};
