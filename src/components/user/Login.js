import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl/index';
import Container from '@material-ui/core/Container/index';
import FormHelperText from '@material-ui/core/FormHelperText/index';
import Input from '@material-ui/core/Input/index';
import Button from '@material-ui/core/Button/index';
import Typography from '@material-ui/core/Typography/index';


const Login = () => {
    // ADD STYLES
    const [valid, setValid] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({ email, password });
    }

    return (
        <Container>
            <Typography variant='h4'>Login</Typography>
            <FormControl onSubmit={handleSubmit} component='form'>
                <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
                <FormHelperText id="my-helper-text">a valid email address</FormHelperText>
                <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
                <FormHelperText id="my-helper-text">minimum 6 characters</FormHelperText>

                {valid === true
                    ?
                    <Button variant="contained" color="inherit">something missing</Button>
                    :
                    <Button type='submit' variant="contained" color="primary">register</Button>
                }

            </FormControl>
        </Container>
    )
}

export default Login;