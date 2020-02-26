import React from 'react'
import { observer, inject } from 'mobx-react'

export default inject('businessStore')(observer((props) => {
    console.log(props.businessStore.loading);

    return (
        <div>
            <h1>Login works!</h1>
        </div>
    )
}));
