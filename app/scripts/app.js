/* eslint no-unused-vars: "off" */
import cookies from 'cookies';
import ServerApi from './ServerAPI';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './configureStore';
import routes from './routes';

$(document).ajaxSend((event, jqxhr, settings) => {
  if (settings.type !== 'GET') {
    return jqxhr.setRequestHeader('X-CSRF-Token', cookies.get('CSRF-Token'));
  }
});

export default class Application {

  constructor() {
    this.store = configureStore();
    this.history = syncHistoryWithStore(browserHistory, this.store);
    this.$document = $(document);
  }

  start() {
    ReactDOM.render(
      <Provider store={this.store}>
        <Router history={this.history} routes={routes}/>
      </Provider>,
      document.getElementById('app')
    );
  }
}
