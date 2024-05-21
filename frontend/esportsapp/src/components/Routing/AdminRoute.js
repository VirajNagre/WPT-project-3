import { Navigate, Outlet} from "react-router-dom";
import { getIsAdmin, getToken } from "../../Services/userServices";

export function AdminRoute(props) {
    console.log("getIsAdmin()",getIsAdmin(),typeof getIsAdmin());;
    let admin = getIsAdmin()
    if (admin==='true') {
        return <Outlet/>;
    }
    else {
        return <Navigate to="/"/>;
    }
}