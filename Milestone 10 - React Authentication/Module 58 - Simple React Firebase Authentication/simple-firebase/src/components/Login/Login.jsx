import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        // console.log('Google mama is coming...');
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const loggedInUser = result.user;
            console.log(user);
            setUser(loggedInUser);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then( result => {
            const loggedUser = result.user;
            console.log(user);
            setUser(loggedUser);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }
    
    const handleSignOut = () => {
        signOut(auth)
            .then( result => {
                console.log(result);
                setUser(null);                
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {
                user ? 
                <button onClick={handleSignOut}>Google SignOut</button> :
                <>
                    <button onClick={handleGoogleSignIn}>Google SignIn</button> 
                    <button onClick={handleGithubSignIn}>Github SignIn</button>
                </>
            }
            {user &&
                <div>
                    <h3>User : {user.displayName}</h3>
                    <h3>Email : {user.email}</h3>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;