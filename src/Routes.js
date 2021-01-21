import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contas from './pages/Contas/Contas';
import Banco from './pages/Bancos/Bancos';
import Receitas from './pages/Receitas/Receitas';
import Login from './pages/Login/Login';
import Cadastrar from './pages/Cadastrar/Cadastrar';
import DataProvider from './Services/DataProvider'

function Routes() {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={props => (
            DataProvider.isAutenhenticated() ? (
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
                <PrivateRoute path='/home/contas' component={Contas} />
                <Route path='/cadastrar' component={Cadastrar} />
                <PrivateRoute path='/home/bancos' component={Banco} />
                <PrivateRoute path='/home/receitas' component={Receitas} />
            </Switch>
        </Router>
    )
}

export default Routes

