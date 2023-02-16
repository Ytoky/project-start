import React from 'react';
import ReactDOM from 'react-dom';
import {router} from "./router/router";
import {RouterProvider} from "react-router-dom";
import './index.css';


ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
    document.getElementById('root')
);
