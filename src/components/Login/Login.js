import React from 'react';
import { observer, inject } from 'mobx-react';
import './Login.scss';

export default inject('formStore')(observer((props) => {
    const { loginForm } = props.formStore;

    const generateFormField = (inputLabel) => (
        <div>
            <label htmlFor={loginForm.$(inputLabel).id}>
                {loginForm.$(inputLabel).label}
            </label>
            <input {...loginForm.$(inputLabel).bind()} />
            <p>{loginForm.$(inputLabel).error}</p>
        </div>
    )

    return (
        <div className="login-form">
            <form  onSubmit={loginForm.LoginFormonSubmit}>
                {generateFormField('email')}
                {generateFormField('password')}
                {generateFormField('passwordConfirm')}
                <button type="submit" onClick={loginForm.onSubmit}>Submit</button>
                <button type="button" onClick={loginForm.onClear}>Clear</button>
                <button type="button" onClick={loginForm.onReset}>Reset</button>
            </form>
        </div>

    )
}));
