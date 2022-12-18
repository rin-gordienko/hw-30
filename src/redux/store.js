import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { loadState, saveState } from "../helpers/storage";

import rootReducer from "./rootReducer";

const preloadedState = loadState();

const store = createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState({ investment: store.getState().investment });
});

export default store;
