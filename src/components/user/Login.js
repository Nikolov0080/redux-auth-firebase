import React, { useEffect, useState } from 'react'
import FormControl from '@material-ui/core/FormControl/index';
import Container from '@material-ui/core/Container/index';
import FormHelperText from '@material-ui/core/FormHelperText/index';
import Input from '@material-ui/core/Input/index';
import Button from '@material-ui/core/Button/index';
import Typography from '@material-ui/core/Typography/index';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/reducers/userReducer';
import { setFormData } from '../../redux/reducers/asyncActions';


const Login = (props) => {
    const dispatch = props.dispatch;
console.log(props)
    // ADD STYLES
    const [valid, setValid] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { email, password }
        dispatch(setFormData(data));
        dispatch(loginUser());
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
                    <Button type='submit' variant="contained" color="primary">login</Button>
                }

            </FormControl>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
      loading: state.loading,
      user: state.user,
      error: state.error,
      formData: state.formData
    }
  }

export default connect(mapStateToProps)(Login);