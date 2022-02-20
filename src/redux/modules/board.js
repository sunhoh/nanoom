// initialState
const initialState = {
  list: [
    {
      title: '게시글이다다다',
      userId: 'dldldl',
      // date: Date.now(),
    },
  ],
};

// Action Type
const CREATE = 'board/CREATE';

// Action Creator & Action
export const createList = item => ({
  type: CREATE,
  item,
});

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE:
      const newItem = [
        ...state.list,
        { title: action.title, userId: action.userId, date: action.date },
      ];
      return { list: newItem };
    default:
      return state;
  }
}
