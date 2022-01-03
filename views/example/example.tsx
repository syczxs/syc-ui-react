import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import DialogExample from '../../lib/components/dialog/dialog.example';
import LayoutExample from "../../lib/components/layout/layout.example"

ReactDOM.render(
    <Router>
        <div>
            <Link to="/dialog">dialog</Link>
            <Link to="/layout">layout</Link>
            <Route path="/dialog" component={DialogExample}></Route>
            <Route path="/layout" component={LayoutExample}></Route>
        </div>
    </Router>
    , document.querySelector('#root'))