import { createStore } from 'redux';
import { Reducers } from './modules/reducers';

export const Store = createStore(Reducers);
