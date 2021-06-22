import React, { useState } from 'react'
import Login from '../user/Login';
import Register from '../user/Register';
import Container from '@material-ui/core/Container/index';
import Button from '@material-ui/core/Button/index';
import Typography from '@material-ui/core/Typography/index';


const LoginRegisterSwitch = () => {

    const [buttonData, setButtonData] = useState('register');

    const updateButtons = () => {
        buttonData === 'register'
            ? setButtonData('login')
            : setButtonData('register')
    }

    return (
        <div>

            <Typography>to join a call please</Typography>

            {buttonData === 'register'
                ? <Login />
                : <Register />
            }

            <Container>
                <Button onClick={updateButtons} variant="contained" color='primary' >{buttonData}</Button>
            </Container>

        </div>
    )
}

export default LoginRegisterSwitch