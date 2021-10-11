import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirectUrl = location.state?.from || '/'
    console.log("came form", location.state?.from);
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirectUrl);

            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="text" name="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" placeholder="Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema jhon? <Link to="/register">Create Account</Link></p>
                <div>---------------or-----------------</div>
                <button onClick={handleGoogleSignIn} className="btn-regular">Google Sign-in</button>
            </div>
        </div>
    );
};

export default Login;