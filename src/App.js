
import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Posts from './component/Posts';
import Coment from './component/Comments';
import Users from './component/Users';
  
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path='/posts' exact component={Posts}/>
      <Link path='/Coment' exact component={Coment}/>
      <Link path='/Users' exact component={Users}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
