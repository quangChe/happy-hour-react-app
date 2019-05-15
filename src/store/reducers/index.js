import { combineReducers } from 'redux';
import { 
  nearbyBusinesses,
  idBusiness
} from './businesses';

export default combineReducers({
  nearbyBusinesses: nearbyBusinesses,
  currentlyViewing: idBusiness
})

