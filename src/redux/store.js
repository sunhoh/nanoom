import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { persistReducer } from 'redux-persist';
// local storage
import storage from 'redux-persist/lib/storage';
import sessionStorage from 'redux-persist/es/storage/session';

const persistConfig = {
  key: 'root',
  storage: sessionStorage,
  // auth reducer만 저장하기 위한 설정
  whitelist: ['auth'],
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),

  //개발자 도구를 사용하기 위한 설정
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
