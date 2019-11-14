import { AnyAction, applyMiddleware, combineReducers, createStore, Dispatch, Store } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { settingsReducer } from './settings/reducer';
import { fetchSettings } from './settings/actions';
import { projectStatusesReducer } from './projectStatuses/reducer';
import { fetchProjectStatuses } from './projectStatuses/actions';
import { fetchPosts } from './posts/actions';
import { postsReducer } from './posts/reducer';
import { widgetsReducer } from './widgets/reducer';
import { fetchWidgets } from './widgets/actions';
import { modeReducer } from './mode/reducer';

const rootReducer = combineReducers({
  mode: modeReducer,
  posts: postsReducer,
  projectStatuses: projectStatusesReducer,
  settings: settingsReducer,
  widgets: widgetsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunk as ThunkMiddleware<AppState, AnyAction>];

const configureStore = (initialState = {}): Store<AppState> => {
  const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

  /* Load async data */
  function fetchData(dispatch: Dispatch): void {
    dispatch(fetchSettings.apply(this));
    dispatch(fetchProjectStatuses.apply(this));
    dispatch(fetchPosts.apply(this));
    dispatch(fetchWidgets.apply(this));
  }
  fetchData(store.dispatch);

  return store;
};

export default configureStore;
