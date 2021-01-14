import React from 'react';
import ReactDOM from 'react-dom';
import "./css/sass/main.sass";
import "./css/sass/notFound.sass";
import "./css/sass/register.sass";
import "./css/sass/tableUsers.sass";
// import "./css/sass/adaptation.sass";
import "./css/sass/game.sass";
import "./css/sass/map.sass";
import "./css/sass/button.sass";
import "./css/scss/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css'
import notFound from "./js/notFound";
// import * as serviceWorker from './js/serviceWorker';
import {Router, Route, browserHistory} from 'react-router';
// import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import {Game} from "./js/game";
import {Main} from "./js/mainPage";
// localStorage.setItem("Token", "781bd9f1de084f4daa7ba2aa8a71a2eab855354e");
ReactDOM.render((
    <Router history={browserHistory}>
        <Route exact path="/" component={Main}/>
        <Route exact path="/main" component={Main}/>
		<Route exact path="/game" component={Game}/>
        <Route path="/*" component={notFound}/>
    </Router>
),document.getElementById("red"));
// basename={process.env.PUBLIC_URL}
// "homepage": "https://rockybdeath.github.io/reactUsers",