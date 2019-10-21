import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';
import App from "./components/App";
import Single from "./components/Single";
import Photogrid from "./components/Photogrid";

import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from 'react-redux';
import store, { history } from './store';
import * as Sentry from '@sentry/browser';

Sentry.init({dsn: "https://30bc01019d104d0391784776a65ba2f0@sentry.io/1784872"});

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Photogrid} />
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(router, document.getElementById('root'));
