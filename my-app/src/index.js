import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./Home";
import SignedIn from "./SignedIn";

ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signedin' element={<SignedIn />} />
        </Routes>
    </HashRouter>,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
