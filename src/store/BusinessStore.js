import { observable, action } from 'mobx';
import api from '../utils/api';

export default class BusinessStore {

    constructor(root) {
        this.root = root;
    }

    @observable nearby = { data: [], loading: true };
    @observable currentlyViewing = {};

    @action async fetchNearby() {
        this.nearby.loading = true;
        const response = await api.searchNearby();
        this.nearby.data = response;
        this.nearby.loading = false;
        console.log(this.root.businessStore.nearby.data);
        console.log(response);
    }

    @action async selectFromNearby(id) {
        this.currentlyViewing = this.nearby.data.filter(place => place.id === id);
    }

    @action async fetchById(id) {
        const response = await api.searchId(id);
        console.log(response);
    }




}