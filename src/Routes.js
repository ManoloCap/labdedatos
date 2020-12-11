import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Main from "./Views/Main";
import WeAre from "./Views/WeAre";
import EM from "./Views/EM";
import Blog from "./Views/Blog";
import Post from "./Views/Post";
import TableroCovid from "./Views/TableroCovid";
const Routes = () => {
    return(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/QuienesSomos/" component={WeAre}/>
        <Route exact path="/EM/" component={EM}/>
        <Route path="/Publicaciones/:id" component={Blog}/>
        <Route path="/Publicaciones/" component={Blog}/>
        <Route path="/TableroCovid/" component={TableroCovid}/>
    </Switch>
)};

export default Routes;