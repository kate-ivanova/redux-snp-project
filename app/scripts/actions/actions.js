import ServerAPI from './ServerAPI';

const api = new ServerAPI();

export function setUser(user) {
  return {
    type: 'SET_USER',
    user,
  };
}

export function updateUser() {
  return dispatch => {
    api.getUser().done(data => {
      dispatch(setUser(data));
    });
  };
}
