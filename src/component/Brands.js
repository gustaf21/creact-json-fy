import React, { Component} from 'react';
import * as Mui from "@material-ui/core";
class Brands extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonfy.com/brands';
    fetch(apiUrl)
    .then((response) => response.json())
    .then(( data) => this.setState({data: data}));
  }
  render() {
    const { data } = this.state;
    return(
        <div style={{ backgroundImage:"url(https://data.whicdn.com/images/235380430/original.gif)", backgroundSize:"cover"} }> 
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

 
          <h1>DATA BRANDS</h1>
          <hr/>
          <table border="3">
            <tr>
              <td>ID</td>   
              <td>NAME</td>
              <td>LOGO URL</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.logo_url}</td>
              </tr>
              )}
          </table>
          
          </center>
        </div>
    );
  }
} 

export default Brands;