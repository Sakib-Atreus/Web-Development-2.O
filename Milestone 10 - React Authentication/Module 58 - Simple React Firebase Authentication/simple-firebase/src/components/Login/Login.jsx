import React from 'react';
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('Google mama is coming...');
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Google Sign IN</button>
        </div>
    );
};

export default Login;