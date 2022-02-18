let id = 1;
// initialState
const initialState = {
  list: [
    {
      id: 1,
      title: '게시글이다다다',
      userId: 'dldldl',
      // data: new Date().getTime(),
      data: Date.now(),
    },
  ],
};

// Action Type
const CREATE = 'board/CREATE';

// Action Creator & Action
export const createList = payload => ({
  type: CREATE,
  id: id++,
  payload,
});

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const newItem = [
        ...state.list,
        { title: action.title, userId: action.userId },
      ];
      return { list: newItem };
    default:
      return state;
  }
}
