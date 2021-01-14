import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Contas from './pages/Contas/Contas';
import Teste from './pages/Teste';
import Receitas from './pages/Receitas/Receitas';
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
                <PrivateRoute path='/home/contas' component={Contas} />
                <PrivateRoute path='/home/cadastrar' component={Cadastrar} />
                <PrivateRoute path='/home/teste' component={Teste} />
                <PrivateRoute path='/home/receitas' component={Receitas} />
            </Switch>
        </Router>
    )
}

export default Routes

