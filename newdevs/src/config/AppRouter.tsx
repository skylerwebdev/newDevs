import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
const AppRouter: React.FC = () =>{
    return(
        <>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
        </>
    )
}

export default AppRouter;