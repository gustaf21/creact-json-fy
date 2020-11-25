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
        <div>
          <center>
          <nav class="nav-extended blue darken-1">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">DATA</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li><a href="https://www.tiktok.com/id/" class="sidebar-navigation-link crayons-link crayons-link--block">TIK TOK</a></li>
      <li><a href="https://www.pubg.com/en-us/" class="sidebar-navigation-link crayons-link crayons-link--block">PUBG MOBILE</a></li>
        <li><a href="https://ff.garena.com/" class="sidebar-navigation-link crayons-link crayons-link--block">FREE FIRE</a></li>
        <li><a href="https://m.mobilelegends.com/en" class="sidebar-navigation-link crayons-link crayons-link--block">MOBILE LEGEND</a></li>
        
      </ul>
    </div>
    
    
  </nav>
  <Mui.Button variant="contained" color="primary">
  <a href="/Users"><font color="white">USERS</font></a>
  </Mui.Button>
  &nbsp;&nbsp;
  <Mui.Button variant="contained" color="primary">
  <a href="/Posts"><font color="white">POSTS</font></a>
  </Mui.Button>
  &nbsp;&nbsp;
  <Mui.Button variant="contained" color="primary">
  <a href="/Coment"><font color="white">COMMENTS</font></a>

</Mui.Button>
  
      
        
            
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
