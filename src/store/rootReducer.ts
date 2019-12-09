import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listingReducer from 'src/pages/Listing/redux/reducer';
import { history } from './history';

const rootReducer = combineReducers({
  router: connectRouter(history),
  listings: listingReducer
});

export default rootReducer;
