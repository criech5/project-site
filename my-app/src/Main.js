import React from "react";
import {Switch, Route} from "react-router";

import Home from './Home';
import Results from './Results';
import SignedIn from "./SignedIn";

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/results' component={Results} />
            <Route exact path='/signedin' component={SignedIn} />
        </Switch>
    );
}

export default Main;