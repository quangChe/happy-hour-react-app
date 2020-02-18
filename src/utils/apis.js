import axios from 'axios';
const API = axios.create({baseURL: 'http://localhost:9000/api'});

const getCurrentLocation = () => new Promise(async resolve => {
  const cb = (pos) => resolve(pos.coords);
  const err = () => resolve({latitude: 34.0522, longitude: -118.2437});
  return await navigator.geolocation.getCurrentPosition(cb, err)
})

const Yelp = {
  searchNearby: async () => {
    try {
      const {latitude, longitude} = await getCurrentLocation();
      const q = `term=happy+hour&longitude=${longitude}&latitude=${latitude}&limit=10`;
      const params = {q};
      const request = await API.get(`/businesses/search`, {params});
      return request.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
  searchByTerm: async (searchTerm, location = {latitude: null, longitude: null}) => {
    try {
      const search = searchTerm.split(" ").join("+");
      const queryString = (location.latitude && location.longitude) ?
        `term=happy+hour+${search}&longitude=${location.longitude}&latitude=${location.latitude}&limit=10`
        : `term=happy+hour+${search}&limit=10`;
      const params = { queryString };
      const request = await API.get('/businesses/search', {params});
      return request.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
  searchId: async (id) => {
    try {
      const request = await API.get('/businesses/' + id);
      return request.data;
    } catch (err) {
      console.error(err);
      return null
    }
  }
}

export default Yelp;