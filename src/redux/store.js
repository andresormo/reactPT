import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { postsReducer } from "./post/post.reducer";


const mainReducer = combineReducers({
    posts: postsReducer
})

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;