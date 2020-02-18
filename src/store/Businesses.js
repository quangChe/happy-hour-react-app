import { observable, action } from "mobx";
import api from "../utils/apis";

export default class Businesses {
    @observable nearbyBusinesses = [];
    @observable currentlyViewing = {};

    @action fetchById = async (id) => {
        const response = await api.searchId(id);
        console.log(response);
    }
}