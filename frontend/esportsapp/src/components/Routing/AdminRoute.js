import { Navigate, Outlet} from "react-router-dom";
import { getIsAdmin, getToken } from "../../Services/userServices";

export function AdminRoute(props) {
    if (getIsAdmin()) {
        return <Outlet/>;
    }
    else {
        return <Navigate to="/"/>;
    }
}