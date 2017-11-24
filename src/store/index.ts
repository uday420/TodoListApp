
import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './root-reducer';
import { routerMiddleware } from 'react-router-redux';
import {logger}  from 'redux-logger'
import { appHistory } from '../appHistory';


const middlewareList=[logger,routerMiddleware(appHistory())];



const composeEnhancers = compose;

const middlewares = composeEnhancers(
applyMiddleware(...middlewareList)
);
//Create store.
const store = createStore(rootReducer,middlewares)

export {store};