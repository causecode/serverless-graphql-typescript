import {combineReducers, Reducer} from 'redux';
import {demoReducer} from 'src/containers/demo/reducer';

// All the reducers should be combined here
export const rootReducer: Reducer<{}> = combineReducers({
    data: demoReducer
});
