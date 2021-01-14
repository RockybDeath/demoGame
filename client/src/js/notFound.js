import React from 'react';
import logo from '../img/logotip.svg';
// import {Link} from "react-router-dom";
import {Link} from "react-router";

function NotFound() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Страница не найдена</p>
                <Link to="/main" className="App-link">
                    Вернуться на главную
                </Link>
            </header>
        </div>
    );
}

export default NotFound;