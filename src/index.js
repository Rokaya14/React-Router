import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './components/App';
import Users from './components/Users';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

const Routing = (
  <Router>
    
    <div className="container">
      <ul>
        <li>
          <NavLink exact  activeClassName="active" to="/">Home </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Contact">Contact</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">Users</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>    
    </div>
  </Router>
)
ReactDOM.render(Routing, document.getElementById('root'));
