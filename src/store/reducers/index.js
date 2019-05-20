import { combineReducers } from 'redux';
import { 
  nearbyBusinesses,
  idBusiness,
  loading,
} from './businesses';

export default combineReducers({
  appLoading: loading,
  nearbyBusinesses: nearbyBusinesses,
  currentlyViewing: idBusiness
})

