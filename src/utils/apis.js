import axios from 'axios';
const ApiUrl = 'http://localhost:9000';

const getCurrentLocation = () => new Promise(async resolve => {
  const cb = (pos) => resolve(pos.coords);
  const err = () => resolve({latitude: 34.0522, longitude: -118.2437});
  return await navigator.geolocation.getCurrentPosition(cb, err)
})

const Yelp = {
  getFeed: async () => {
    try {
      const {latitude, longitude} = await getCurrentLocation();
      const search = encodeURIComponent(`term=happy+hour&longitude=${longitude}&latitude=${latitude}`);
      const request = await axios.get(`${ApiUrl}/list/businesses?search=${search}`)
      return request.data;
    } catch (err) {
      console.log(err);
    }
  },
}

export default Yelp;