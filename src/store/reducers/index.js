import { combineReducers } from 'redux';

const nearbyBusinessesReducer = (nearestBusinesses = [], action) => {
  if (action.type === 'FETCH_BUSINESSES') {
    return action.payload;
  } 
  // else if (action.type === 'CREATE_BUSINESS') {
  //   return [...nearestBusinesses, action.payload.businessName];
  // }

  return nearestBusinesses;
}

export default combineReducers({
  nearestBusinesses: nearbyBusinessesReducer
})

