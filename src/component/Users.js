import React, { Component} from 'react';
import * as Mui from "@material-ui/core";
class Users extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonfy.com/users';
    fetch(apiUrl)
    .then((response) => response.json())
    .then(( data) => this.setState({data: data}));
  }

  render() {
    const { data } = this.state;

    return(
        <div style={{ backgroundImage:"url(https://data.whicdn.com/images/235380430/original.gif)"} }>
          <center>
          <nav>
                    <Mui.AppBar>
                        <Mui.Toolbar>
                        <a href="#!" class="brand-logo right">Data Json Users</a>
                            <Mui.Typography>
                    <div class="nav-wrapper">
                    <ul class="left hide-on-med-and-down">
                        <li><a href="/Users">Users</a></li>
                        <li><a href="/Coment">Comments</a></li>
                        <li><a href="/Posts">Posts</a></li>
                        <li><a href="/Albums">Albums</a></li>
                        <li><a href="/Photos">Photos</a></li>
                        <li><a href="/Categories">Categories</a></li>
                        <li><a href="/Brands">Brands</a></li>
                        <li><a href="/Items">Items</a></li>
                    </ul>
                    </div>
                    </Mui.Typography>
                    </Mui.Toolbar>
                    </Mui.AppBar>
                    </nav>
   
          <h1>DATA USERS</h1>
          <hr/>
          <table border="3">
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>USERNAME</td>
              <td>EMAIL</td>
              <td>PASSWORD</td>
              <td>AGE</td>
              <td>WEBSITE</td>
              <td>PHONE</td>
              <td>DATE_ADD</td>
              <td>DATE_UPD</td>
              <td>PASSWORD_MD5</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.username}</td>
                <td>{todo.email}</td> 
                <td>{todo.password}</td>
                <td>{todo.age}</td>
                <td>{todo.website}</td>
                <td>{todo.phone}</td>
                <td>{todo.date_add}</td>
                <td>{todo.date_upd}</td>
                <td>{todo.password_md5}</td>
              </tr>
              )}
          </table>
          
          </center>
        </div>
    );
  }
} 

export default Users;
