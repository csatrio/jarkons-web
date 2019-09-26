import React from 'react'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import FrontPage from './page/frontpage/FrontPage'
import {inject, observer} from "mobx-react";
import {storeKeys} from "./store";


const doInject = (component) => withRouter(inject(...storeKeys)(observer(component)));

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={doInject(FrontPage)}/>
        </Switch>
    </Router>
)
