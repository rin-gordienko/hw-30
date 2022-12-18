import { createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { loadState, saveState } from "../helpers/storage";

import rootReducer from "./rootReducer";

// const logger = (store) => (next) => (action) => {
//   console.log("dispatch", action);
//   const result = next(action); // dispatch(action)
//   console.log("next state", store.getState());
//   return result;
// };

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
