/* eslint no-unused-vars: "off" */
import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

const configureStore = () => {
  const reducers = combineReducers({
    routing: routerReducer,
  });

  const store = createStore(
    reducers
  );

  return store;
};

export default configureStore;
