import React, {useContext} from 'react';
import { Route, Routes} from "react-router-dom";
import {Publicroute,Privateroute} from "../../routes/routes";
import {AuthContext} from "../../context/context";

const AppRouter = () => {
    let i=0;
    const {isAuth,setAuth}=useContext(AuthContext);
    return (

            isAuth?
                <Routes>
                    {Privateroute.map(
                        routes=>
                            <Route exact path={routes.path} element={routes.component} key={i++}/>
                    )
                    }
                </Routes>
         :
                <Routes>

                    {Publicroute.map(
                        routes=>
                            <Route exact path={routes.path} element={routes.component} key={i++}/>
                    )
                    }
                </Routes>


    );
};

export default AppRouter;