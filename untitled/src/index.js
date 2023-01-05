import React from 'react';
import {createRoot} from 'react-dom/client';
import './bootstrap/css/bootstrap.min.css'
import App from './App';
const creatroot=document.getElementById('root');
const root=createRoot(creatroot);

root.render(

    <React.StrictMode>
        <App/>
    </React.StrictMode>

);


