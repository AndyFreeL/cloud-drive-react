import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from './userReducer';
import fileReducer from './fileReducer';

let reducers = combineReducers({
  user: userReducer,
  file: fileReducer
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
