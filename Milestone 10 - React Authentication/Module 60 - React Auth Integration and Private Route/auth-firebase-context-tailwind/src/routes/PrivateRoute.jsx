import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import {PacmanLoader} from "react-spinners";

const PrivateRoute = ({children}) => {
    
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <PacmanLoader color="blue" />
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>
};

export default PrivateRoute;