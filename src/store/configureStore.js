import productionConfigureStore from './configureStore.prod';
import developmentConfigureStore from './configureStore.dev';

let configureStore;

if (process.env.NODE_ENV === 'production') {
  configureStore = productionConfigureStore;
} else {
  configureStore = developmentConfigureStore;
}

export default configureStore;
