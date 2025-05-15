const isProduction = () => {
  const env = import.meta.env.NODE_ENV || 'development';
  return env === 'production';
};

const getEnvironments = () => {
  if (isProduction())
    return import.meta.env.VITE_BASE_URL_PRODUCTION
      ? import.meta.env.VITE_BASE_URL_PRODUCTION
      : 'production_env_not_found';
  else
    return import.meta.env.VITE_BASE_URL_DEVELOPMENT
      ? import.meta.env.VITE_BASE_URL_DEVELOPMENT
      : 'development_env_not_found';
};

const config = {
  APP_NAME: 'PDP Attandence',
  API_ROOT: getEnvironments(),
  isProduction: isProduction(),
  DEFAULT_LANG_CODE: 'uz',
  PROJECT_ID: 1,
};

export default config;
