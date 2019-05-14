import api from '../../utils/apis';
 
export const fetchNearby = () => async dispatch => {
  const response = await api.searchNearby();
  return dispatch({ type: 'FETCH_NEARBY', payload: response})
}

export const fetchById = (id) => async dispatch => {
  const response = await api.searchId(id);
  return dispatch( {type: 'SELECT_BUSINESS', payload: response})
}