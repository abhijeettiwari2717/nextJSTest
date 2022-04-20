import { createStore, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from 'redux/reducers/userReducer';
// import thunk from 'redux-thunk';

const reducer = combineReducers({
  todo: userReducer
});

const initialState: any = []
const store = createStore(reducer, initialState);

export default store