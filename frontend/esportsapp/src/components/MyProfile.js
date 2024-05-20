import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const MyProfile=()=>{
    const navigate=useNavigate();

    const handleClick=()=>{
        navigate("/update")
        // alert("hello");
    }
    
    return(
        <Container>
            <h3 className="text-center">My Profile</h3>
            <Button type="submit" className="btn btn-success" onClick={handleClick}>Edit Profile</Button>
        </Container>
    );
}