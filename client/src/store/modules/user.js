export const CHANGE_NAME = 'sl/user/changeName';
export const FULLNAME = 'sl/user/fullName';

const userState = {
  firstName: 'Roman',
  lastName: 'Krasevych',
};

const getters = {
  [FULLNAME]: state => `${state.firstName} ${state.lastName}`,
};

const mutations = {
  [CHANGE_NAME](state, newName) {
    state.firstName = newName || 'No Name';
  },
};

export default { getters, mutations, state: userState };
