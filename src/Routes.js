import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login/Login';
import Cadastrar from './pages/Cadastrar/Cadastrar';

function Routes() {


    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
                <Route path='/reports' component={Reports} />
                <Route path='/products' component={Products} />
                <Route path='/cadastrar' component={Cadastrar} />
            </Switch>
        </Router>
    )
}

export default Routes

