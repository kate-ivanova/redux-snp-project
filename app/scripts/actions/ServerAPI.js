import ServerClient from 'sp-utils-serverclient';

export default class ServerAPI extends ServerClient {
  initialize() {}

  _isServer() {
    // can use stubs
    return false;
  }

  getCurrentUser() {
    return this.get({
      url: '/api',
      stub: async => {
        setTimeout(() => {
          async.resolve({
            id: 0,
            name: 'Ivan Ivanov',
          });
        }, 500);
      },
    });
  }
}
