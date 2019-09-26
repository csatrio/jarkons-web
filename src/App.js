import React from 'react';
import {observer, Provider} from "mobx-react";
import Router from './Router'
import stores from "./store";
import './css/App.css'

@observer
class App extends React.Component {
    render() {
        return (
            <Provider {...stores}>
                <Router/>
            </Provider>
        );
    }
}

export default App;
