import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register</h2>
                <form onSubmit="">
                    <input type="email" name="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>------------------------------------------------</div>
                <button className="btn-regular">Sign in Google</button>
            </div>
        </div>
    );
};

export default Register;