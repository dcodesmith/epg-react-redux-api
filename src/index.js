import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import configureStore from './store/configureStore';
import { loadChannels } from './actions/channelActions';
import { loadProgrammes } from './actions/programmeActions';
// import { navigate } from './actions/navigationActions';

import App from './containers/App';
import './styles/base.css';

const store = configureStore();

// const setInitialOffset = () => {
//   const currentHour = (new Date()).getHours();

//   if (currentHour >= 21) {
//     return 18;
//   } else if (currentHour <= 6) {
//     return 0;
//   }

//   return currentHour - 3;
// };

store.dispatch(loadChannels());
store.dispatch(loadProgrammes());
// store.dispatch(navigate(setInitialOffset()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
