import {Navigate, Outlet} from "react-router-dom";

const useAuth = () => {
    let loggedIn = false;
    let user = JSON.parse(window.localStorage.getItem('user'));
    if (user !== null) loggedIn = true
    else loggedIn = false
    return loggedIn
}
const ProtectedRoutes = (props) => {
    const isAuth = useAuth();
    if (props.state == "true") return isAuth ? <Outlet /> : <Navigate to="/landing" />
    else return !isAuth ? <Outlet /> : <Navigate to="/dashboard" />
}

export default ProtectedRoutes;
