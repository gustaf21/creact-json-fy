import React, { Component} from 'react';
import * as Mui from "@material-ui/core";
class Comments extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonfy.com/comments';
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
          <h1>DATA COMMENTS</h1>
          <hr/>
          <table border="3">
            <tr>
              <td>ID</td>   
              <td>USE COM FK</td>
              <td>POS COM FK</td>
              <td>COMMENT</td>
              <td>DATE ADD</td>
              <td>DATE UPD</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.use_com_fk}</td>
                <td>{todo.pos_com_fk}</td>
                <td>{todo.comment}</td>
                <td>{todo.date_add}</td>
                <td>{todo.date_upd}</td>
                
              </tr>
              )}
          </table>
          
          </center>
        </div>
    );
  }
} 

export default Comments;