import api from '../../utils/apis';

export const createBusiness = (businessName) => {
  return {
    type: 'CREATE_BUSINESS',
    payload: {businessName}
  }
}

export const fetchBusinesses = () => async dispatch => {
  const response = await api.getFeed();
  dispatch({ type: 'FETCH_BUSINESSES', payload: response})
}