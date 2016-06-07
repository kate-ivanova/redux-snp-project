import {setUser} from 'actions/actions';

describe('actions', () => {
  it('generates SET_USER action', () => {
    const user = {
      id: 0,
      name: 'Petr Petrov',
    };
    expect(setUser(user)).to.be.eql({
      type: 'SET_USER',
      user,
    });
  });
});
