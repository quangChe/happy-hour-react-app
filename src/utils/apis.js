import axios from 'axios';
const ApiUrl = 'http://localhost:9000';

const Yelp = {
  get: async () => {
    try {
      const request = await axios.get(ApiUrl);
      return request.data;
    } catch (err) {
      console.log(err);
    }
  },
}

export default Yelp;