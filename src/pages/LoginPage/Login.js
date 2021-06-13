import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { CircularProgress, Button } from '@material-ui/core';
import background from '../../assets/background.jpg';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../store/auth-actions';

const useStyles = makeStyles(styles);

const Login = () => {
    const classes = useStyles();
    const email = useRef();
    const password = useRef();
    const sending = useSelector((state) => state.auth.sending);
    const dispatch = useDispatch();

    const submitLoginHandler = (events) => {
        events.preventDefault();
        dispatch(auth(email.current.value, password.current.value));
    }

    return (
        <div className={classes.container}>
            <div className='login'>
                <form onSubmit={submitLoginHandler}>
                    <p>Email address</p>
                    <input type='text' name='username' placeholder='Enter Email' ref={email} />
                    <p>Password</p>
                    <input type='password' name='password' placeholder='••••••••' ref={password} />
                    {sending ?
                        <Button className='btn-submit'><CircularProgress className='cuicular-progress' size={23} /></Button> :
                        <Button className='btn-submit' type='submit'>Sign In</Button>}
                </form>
            </div>
            <img className='background' src={background} alt='background'></img>
        </div>
    );
}

export default Login;