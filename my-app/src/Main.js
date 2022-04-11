import React from "react";
import {Routes, Route, HashRouter} from "react-router";

import SpotiPsyHome from './SpotiPsyHome';
import SignedIn from "./SignedIn";
import Yourdle from "./Yourdle";

const Main = () => {
    return (
        <Routes>
            {/*<Route path='/' element={<Home />} />*/}
            {/*<Route path='/baseball' element={<LeagueLeader />} />*/}
            <Route path='/spotipsy' element={<SpotiPsyHome />} />
            <Route path='/spotipsy/signedin' element={<SignedIn />} />
            <Route path='/spotipsy/yourdle' element={<Yourdle />} />
        </Routes>
    );
}


export default Main;
