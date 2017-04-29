import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import { loadChannels } from './actions/channelActions';
import { loadProgrammes } from './actions/programmeActions';

import App from './containers/App';

import './styles/base.less';

const store = configureStore();

store.dispatch(loadChannels());
store.dispatch(loadProgrammes());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// Provider attaches store to react container components
