import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from './userReducer';
import fileReducer from './fileReducer';
import uploadReducer from "./uploadReducer";
import preloaderReducer from "./preloaderReducer";

let reducers = combineReducers({
  user: userReducer,
  files: fileReducer,
  upload: uploadReducer,
  preloader:preloaderReducer

});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
