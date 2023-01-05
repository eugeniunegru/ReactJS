import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/context";

const MyNavBar = () => {
    const {isAuth,setAuth}=useContext(AuthContext)
    const logout=()=>{
        setAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="">Logo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Cards">Cards</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="About">About</Link>
                        </li>
                        <li className="nav-item d-flex" style={{position:"absolute",right:"50px"}}>
                            <Link className="nav-link" to="/Loghin">Loghin</Link>
                        </li>
                        <li className="nav-item d-flex" style={{position:"absolute",right:"150px"}}>
                            <Link className="nav-link" to="/Cards" onClick={()=>setAuth(false)}>Iesire</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MyNavBar;