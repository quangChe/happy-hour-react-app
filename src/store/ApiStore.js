import { flow } from 'mobx'
import api from '../utils/api';

export default class ApiStore {

    constructor(root) {
        this.root = root;
    }

    fetchNearby = flow(function*() {
        this.root.businessStore.setLoading(true);
        const response = yield api.searchNearby();
        this.root.businessStore.setPlacesNearby(response);
        this.root.businessStore.setLoading(false);
    });

    fetchById = flow(function*(id) {
        const response = yield api.searchId(id);
        this.root.businessStore.viewPlace(response);
    })

    
}