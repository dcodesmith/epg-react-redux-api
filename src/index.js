/* eslint import/default: 0 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadChannels } from './actions/channelActions';
import { loadProgrammes } from './actions/programmeActions';

import './styles/base.less';

const store = configureStore();
store.dispatch(loadChannels());
store.dispatch(loadProgrammes());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);

// Provider attaches store to react container components
