import React from 'react'
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import FrontPage from './page/frontpage/FrontPage'
import {inject, observer} from "mobx-react";


const doInject = (component) => withRouter(inject('store', 'settings')(observer(component)));

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={doInject(FrontPage)}/>
        </Switch>
    </Router>
)
