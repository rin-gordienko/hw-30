import { combineReducers } from "redux";

import investmentReducer from "./investment/reducers";
import todosReducer from "./todos/reducers";

const rootReducer = combineReducers({
  investment: investmentReducer,
  todos: todosReducer
});

export default rootReducer;
