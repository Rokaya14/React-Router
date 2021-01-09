import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const User = (props) =>{
return (<p>{props.match.params.id}</p>)
} 

class Users extends Component {
  state = {}
  render() {
   
   
    return (
      <div>
        <h1>Users</h1>
        <strong>Select a user</strong>
        <ul>
          <li>
            <Link to="/users/1">user 1</Link>
          </li>
          <li>
            <Link to="/Users/2" >User 2</Link>
          </li>
          <li>
            <Link to="/users/3">User 3</Link>
          </li>
        </ul>
        <Route path="/users/:id" component={User} />
      </div>
    );
  }
}

export default Users;