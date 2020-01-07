import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import listingReducer from 'src/pages/Listing/redux/reducer';
import { history } from './history';
import { modalsReducer } from './modals';
import { dropdownsReducer } from './dropdowns';

const rootReducer = combineReducers({
  router: connectRouter(history),
  listings: listingReducer,
  modals: modalsReducer,
  dropdowns: dropdownsReducer
});

export default rootReducer;
