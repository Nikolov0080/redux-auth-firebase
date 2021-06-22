import React, { useState } from 'react'
import Login from '../user/Login';
import Register from '../user/Register';

const LoginRegisterSwitch = () => {

    const [newUser, setNewUser] = useState(true);


    return (
        <div>
            <Login />
            <Register />
        </div>
    )
}

export default LoginRegisterSwitch