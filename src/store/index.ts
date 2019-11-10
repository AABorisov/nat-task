import { combineReducers, createStore, Store } from 'redux';

export const rootReducer = combineReducers({});

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (): Store<AppState> => {
  return createStore(rootReducer);
};

export default configureStore;
