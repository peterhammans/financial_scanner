import { ListingsState } from 'src/pages/Listing/redux/types';
import { ModalsState } from './modals/types';
import { DropdownsState } from './dropdowns/types';

export interface AppState {
  listings: ListingsState;
  modals: ModalsState;
  dropdowns: DropdownsState;
}
