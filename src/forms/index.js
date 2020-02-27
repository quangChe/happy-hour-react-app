import { observable } from 'mobx'
import LoginForm from './LoginForm'

export default class AppForms {

    constructor() {
        this.setObservableForms();
    }

    @observable loginForm;

    setObservableForms() {
        this.loginForm = new LoginForm();
    }
}