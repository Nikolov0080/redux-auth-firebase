import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl/index';
import Container from '@material-ui/core/Container/index';
import FormHelperText from '@material-ui/core/FormHelperText/index';
import Input from '@material-ui/core/Input/index';
import Button from '@material-ui/core/Button/index';

const Login = () => {
    // ADD STYLES
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({ email, password });
    }

    return (
        <Container>
            <FormControl onSubmit={handleSubmit} component='form'>
                <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Email" />
                <FormHelperText id="my-helper-text">a valid email address</FormHelperText>
                <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
                <FormHelperText id="my-helper-text">minimum 6 characters</FormHelperText>
                <Button type='submit' variant="contained" color="primary">enter</Button>
            </FormControl>
        </Container>
    )
}

export default Login;