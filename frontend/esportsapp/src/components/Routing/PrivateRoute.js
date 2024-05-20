import { Navigate, Outlet} from "react-router-dom";
import { getToken } from "../../Services/userServices";

export function PrivateRoute(props) {
    const token = getToken();
    // console.log("private route token",token);
    if (token) {
        return <Outlet/>;
    }
    else {
        return <Navigate to="/"/>;
    }
}