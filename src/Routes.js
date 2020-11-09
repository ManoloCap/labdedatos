import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Main from "./Views/Main";
import WeAre from "./Views/WeAre";

const Routes = () => {
    return(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/QuienesSomos" component={WeAre}/>
    </Switch>
)};

export default Routes;