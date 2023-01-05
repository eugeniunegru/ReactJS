import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import MyNavBar from "./UI/MyNavBar/MyNavBar";
import AppRouter from "./UI/AppRouter/AppRouter";
import {AuthContext} from "./context/context";
import useObserver from "./hooks/useObserver";
function App() {
    const [isAuth,setAuth]=useState(false)

    useEffect(()=>{
        if(localStorage.getItem('auth'))
            setAuth(true)
    },[])


    return(

        <AuthContext.Provider value={{
            isAuth,
            setAuth
        }}>
            <BrowserRouter>
                <MyNavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>


    )

}

export default App;
