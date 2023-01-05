import React, {useContext} from 'react';
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import {AuthContext} from "../context/context";

const Login = () => {
    const {isAuth,setAuth}=useContext(AuthContext)
    const loghin=event=>{
        event.preventDefault();
        setAuth(true)
        localStorage.getItem('auth','false');
    }

    return (
        <div className="container mt5">
            <h1>Pagina de logare</h1>
            <form onSubmit={loghin}>
                <label>Username</label>
                <MyInput type="text" placeholder="username"/>
                <label>Password</label>
                <MyInput type="password" placeholder="password"/>
                <MyButton >Loghin</MyButton>
            </form>
        </div>
    );
};

export default Login;