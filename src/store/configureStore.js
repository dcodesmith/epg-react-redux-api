import productionConfigureStore from './configureStore.prod';
import developmentConfigureStore from './configureStore.dev';

let configureStore = developmentConfigureStore;

if (process.env.NODE_ENV === 'production') {
  configureStore = productionConfigureStore;
}

export default configureStore;
