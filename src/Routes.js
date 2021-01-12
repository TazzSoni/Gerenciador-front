import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login/Login';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import Auth from './Services/Auth'

function Routes() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            Auth.isAutenhenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        )
        }
        />
    )

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <PrivateRoute path='/home' exact component={Home} />
                <PrivateRoute path='/home/reports' component={Reports} />
                <PrivateRoute path='/home/products' component={Products} />
                <PrivateRoute path='/home/cadastrar' component={Cadastrar} />
            </Switch>
        </Router>
    )
}

export default Routes

