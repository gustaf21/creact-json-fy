import React, { Component} from 'react';
import * as Mui from "@material-ui/core";
class Photos extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonfy.com/photos';
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
   
 
          <h1>DATA PHOTOS</h1>
          <hr/>
          <table>
            <tr>
              <td>ID</td>   
              <td>ALB PHO FK</td>
              <td>CAPTION</td>
              <td>URL</td>
              <td>THUMBNAIL URL</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.alb_pho_fk}</td>
                <td>{todo.caption}</td>
                <td>{todo.url}</td>
                <td>{todo.thumbnail_url}</td>   
              </tr>
              )}
          </table>
          
          </center>
        </div>
    );
  }
} 

export default Photos;