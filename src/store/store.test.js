import expect from 'expect';
import { createStore } from 'redux';

import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import { createProgrammeSuccess } from '../actions/programmeActions';

describe('Store', () => {
  it('should handle creating programmes', () => {
    const store = createStore(rootReducer, initialState);
    const programmes = [];

    const action = createProgrammeSuccess(programmes);
    store.dispatch(action);

    const actual = store.getState().programmes;
    const expected = [];

    expect(actual).toEqual(expected);
  });
});
