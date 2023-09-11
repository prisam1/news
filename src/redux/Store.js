import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import authReducer from "./authReducer"
import newsReducer from "./newsReducer"
import favoritesReducer from "./favoritesReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
  favorites: favoritesReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
