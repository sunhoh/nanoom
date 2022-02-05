// initialState
const initialState = {
  token: null,
};

// Action Type
const SET_TOKEN = 'set_token';

// Action Creator & Action
export const setToken = token => ({
  type: SET_TOKEN,
  token,
});

// Reducer
export const Auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
};
