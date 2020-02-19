import { observable, action } from 'mobx';
import api from '../utils/apis';


class Businesses {
    @observable nearby = { data: [], loading: true };
    @observable currentlyViewing = {};

    @action async fetchNearby() {
        this.nearby.loading = true;
        const response = await api.searchNearby();
        this.nearby.data = response;
        this.nearby.loading = false;
        console.log(response);
    }

    @action async fetchById(id) {
        const response = await api.searchId(id);
        console.log(response);
    }


}

export default new Businesses();