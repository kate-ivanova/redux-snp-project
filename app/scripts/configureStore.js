/* eslint no-unused-vars: "off" */
import {createStore, combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import ServerAPI from './ServerAPI';

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
