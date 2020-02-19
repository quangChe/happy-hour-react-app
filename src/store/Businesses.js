import { observable, action } from 'mobx';
import api from '../utils/apis';


class Businesses {
    @observable nearby = { data: [], loading: true };
    @observable currentlyViewing = {};

    @action async fetchNearby() {
        const response = await api.searchNearby();
        this.nearby.data = response;
        console.log(response);
    }

    @action async fetchById(id) {
        const response = await api.searchId(id);
        console.log(response);
    }


}

export default new Businesses();