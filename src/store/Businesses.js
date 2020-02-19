import { observable, action, decorate } from 'mobx';
import api from '../utils/apis';

class Businesses {
    nearby = { data: [], loading: true };
    currentlyViewing = {};

    fetchNearby = async () => {
        const response = await api.searchNearby();
        this.nearby.data = response;
        // console.log(response);
    }

    fetchById = async (id) => {
        const response = await api.searchId(id);
        console.log(response);
    }


}

decorate(Businesses, {
    nearby: observable,
    currentlyViewing: observable,
    fetchById: action,
    fetchNearby: action,
})

export default new Businesses();