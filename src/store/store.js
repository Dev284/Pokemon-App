import {createStore} from 'redux';
import rootReducer from '../reducer/rootReducer';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;