import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import Home from '../pages/home';
import Signin from '../pages/signin';
import Checkout from '../pages/checkout';

class Nav extends React.Component{

    render(){
        return(
            <div className='Nav'>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <Link className="navbar-brand" to=''>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to='/signin' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to='/signin' data-toggle="modal" data-target="#modalSignin">SignIn</Link>
                            <Link className="dropdown-item" to=''>Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to='/checkout' data-toggle="modal" data-target="#modalCheckout">Checkout</Link>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>
                    <Signin />
                    <Checkout />
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Nav;