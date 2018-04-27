import {combineReducers} from 'redux';
import {reducerData} from './reducerData';
import {reducerState} from './reducerState';
import {reducerCredit} from './reducerCredit';
import {reducerHistory} from './reducerHistory';
import {reducerUser} from './reducerUser';
import {reducerSong} from './reducerSong';

export const reducer=combineReducers({
    reducerData,
    reducerState,
    reducerCredit,
    reducerHistory,
    reducerUser,
    reducerSong
})