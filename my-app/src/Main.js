import React from "react";
import {Routes, Route, HashRouter} from "react-router";

import Home from './Home';
import SignedIn from "./SignedIn";

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/signedin' element={<SignedIn />} />
        </Routes>
    );
}


export default Main;