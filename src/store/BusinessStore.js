import { observable, action } from 'mobx';

export default class BusinessStore {

    constructor(root) {
        this.root = root;
    }

    @observable loading;
    @observable nearby;
    @observable currentlyViewing;

    @action setLoading = (bool) => {
        this.loading = bool;
    }
    
    @action setPlacesNearby = (places) => {
        this.nearby = places;
    }

    @action viewPlace = (place) => {
        this.currentlyViewing = place;
    }
}