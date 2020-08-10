import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunker from "redux-thunk";
import columns from "./entities/columns";
import tasks from "./entities/tasks/reducer";
import * as persistConfig from "./persistConfigs";
import DevTools from "../components/Devtools";

const middlewares = [thunker];

const reducer = combineReducers({ columns, tasks });

const persistedReducer = persistReducer(
  persistConfig.rootPersistConfig,
  reducer
);

export default () => {
  let store = createStore(
    persistedReducer,
    undefined,
    compose(applyMiddleware(...middlewares), DevTools.instrument())
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
