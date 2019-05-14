import { combineReducers } from 'redux';

const nearbyBusinessesReducer = (nearestBusinesses = [], action) => {
  switch (action.type) {
    case 'FETCH_BUSINESSES':
      return action.payload;
    default: 
      return nearestBusinesses;
  }
}

export default combineReducers({
  nearestBusinesses: nearbyBusinessesReducer
})

