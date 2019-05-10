import { combineReducers } from 'redux'

const fetchNearest = () => {
  return ['hello', 'hi', 'bye'];
}

export default combineReducers({
  nearestBusinesses: fetchNearest
})

