import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listingReducer from 'src/pages/Listing/redux/reducer';
import { history } from './history';
import { modalsReducer } from './modals';

const rootReducer = combineReducers({
  router: connectRouter(history),
  listings: listingReducer,
  modals: modalsReducer
});

export default rootReducer;
