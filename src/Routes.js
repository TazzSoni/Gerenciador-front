import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/index';
import Contas from './pages/Contas/Contas';
import Banco from './pages/Bancos/Bancos';
import Receitas from './pages/Receitas/Receitas';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import DataProvider from './Services/DataProvider'
import BoasVindas from './pages/BoasVindas/Index';

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
                <Route path='/' exact component={BoasVindas} />
                <Route path='/login' exact component={Login} />
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

