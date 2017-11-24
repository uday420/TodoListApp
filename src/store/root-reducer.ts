
import {combineReducers}  from 'redux';

import {} from './state'
import {} from '.app-action'
import { reducers } from './reducers'
import { IAppState } from './state/app-state';


const appReducer = combineReducers({
...reducers
});

export const rootReducer = (state:IAppState,action?:any)=>{
    return appReducer(state,action);
}