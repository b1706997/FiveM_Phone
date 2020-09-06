import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from "react-router-dom";
import {Provider} from 'react-redux'
import store from '@redux/store.js'
import './i18n';

class App extends React.Component {
    
}
ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App></App>
        </Provider>
    </Router>,
    document.getElementById('root')
);
