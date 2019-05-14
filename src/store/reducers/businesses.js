export const nearbyBusinesses = (nearbyBusinesses = [], action) => {
  switch (action.type) {
    case 'FETCH_NEARBY':
      return action.payload;
    default: 
      return nearbyBusinesses;
  }
}

export const retrieveBusiness = (id = null, action) => {
  switch (action.type) {
    case 'ID_BUSINESS': 
      return action.payload;
    default: 
      return id;
  }
}