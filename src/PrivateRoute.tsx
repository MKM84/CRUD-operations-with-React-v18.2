import { Navigate, Outlet } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';

const PrivateRoute = () => {
    const isAuthenticated = AuthenticationService.isAuthenticated;

    return !isAuthenticated ? <Navigate to='/login' /> : <Outlet/>

};

export default PrivateRoute;