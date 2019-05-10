import { combineReducers } from 'redux';

const nearest =  ['hello', 'hi', 'bye'];

const nearbyBusinessesReducer = (nearestBusinesses = nearest, action) => {
  if (action.type === 'CREATE_BUSINESS') {
    return [...nearestBusinesses, action.payload.businessName];
  }

  return nearestBusinesses;
}

export default combineReducers({
  nearestBusinesses: nearbyBusinessesReducer
})

