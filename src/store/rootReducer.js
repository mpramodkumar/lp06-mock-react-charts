import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import chartDataReducer from './reducers/chartDataReducer';

const root = combineReducers({
  router: routerReducer,
  chartDataReducer,
});

export default root;
