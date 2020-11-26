import React, { Component} from 'react';
import * as Mui from "@material-ui/core";
class Items extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    const apiUrl = 'https://jsonfy.com/items';
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
  
 
          <h1>DATA ITEMS</h1>
          <hr/>
          <table border="3">
            <tr>
              <td>ID</td>   
              <td>NAME</td>
              <td>DESCRIPTION</td>
              <td>WHOLESALE PRICE</td>
              <td>PRICE</td>
              <td>PHOTO URL</td>
              <td>STOCK</td>
              <td>SALES</td>
              <td>ACTIVE</td>
              <td>DATE ADD</td>
              <td>DATE UPD</td>
              <td>BRA ITE FK</td>
            </tr>
            {data.map(todo =>
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.name}</td>
                <td>{todo.description}</td>
                <td>{todo.wholesale_price}</td>
                <td>{todo.price}</td>
                <td>{todo.photo_url}</td>
                <td>{todo.stock}</td>
                <td>{todo.sales}</td>
                <td>{todo.active}</td>
                <td>{todo.date_add}</td>
                <td>{todo.date_upd}</td>
                <td>{todo.bra_ite_fk}</td>
              </tr>
              )}
          </table>
          
          </center>
        </div>
    );
  }
} 

export default Items;