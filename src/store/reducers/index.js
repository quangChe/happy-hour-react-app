import { combineReducers } from 'redux';
import { 
  nearbyBusinesses,
  retrieveBusiness
} from './businesses';

export default combineReducers({
  nearbyBusinesses: nearbyBusinesses,
  currentlyViewing: retrieveBusiness
})

