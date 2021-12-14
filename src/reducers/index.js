import { combineReducers } from 'redux';
import search from './search';
import pagination from './pagination';

export default combineReducers({ search, pagination });