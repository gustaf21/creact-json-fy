
import './App.css';
import {BrowserRouter, Switch, Link} from 'react-router-dom';
import Posts from './component/Posts';
import Coment from './component/Comments';
import Users from './component/Users';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Categories from './component/Categories';
import Brands from './component/Brands';
import Items from './component/Items';
  
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Link path='/posts' exact component={Posts}/>
      <Link path='/Coment' exact component={Coment}/>
      <Link path='/Users' exact component={Users}/>
      <Link path='/Albums' exact component={Albums}/>
      <Link path='/Photos' exact component={Photos}/>
      <Link path='/Categories' exact component={Categories}/>
      <Link path='/Brands' exact component={Brands}/>
      <Link path='/Items' exact component={Items}/>
    </Switch>
    </BrowserRouter>
    
  );
}

export default App;
