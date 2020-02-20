import { observable, action , toJS } from 'mobx';

export default class BusinessStore {

    constructor(root) {
        this.root = root;
    }

    @observable loading;
    @observable nearby;

    @action setLoading = (bool) => {
        this.loading = bool;
    }
    
    @action setPlacesNearby = (places) => {
        this.nearby = places;
    }
}