import { observable, action, computed, decorate } from 'mobx';
import { withRouter } from 'react-router-dom';
import api from '../utils/apis';

class Businesses {
    nearbyBusinesses = { data: [], loading: true };
    currentlyViewing = {};

    fetchNearby = async () => {
        const response = await api.searchNearby();
        console.log(response);
    }

    fetchById = async (id) => {
        const response = await api.searchId(id);
        console.log(response);
    }
}

decorate(withRouter(Businesses), {
    nearbyBusinesses: observable,
    currentlyViewing: observable,
    fetchById: action,
    fetchNearby: action,
})

export default new Businesses();