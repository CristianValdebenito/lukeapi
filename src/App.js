import './App.css';
import ApiSw from './Components/ApiSw';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';



function App() {
  
  return (
    <div className='App'>

    <BrowserRouter>
    <nav>
      <ul>
        <li>
      <Link to={"/"}> Inicio  </Link>
      </li>
      <li>
      <Link to={"/personajes"}> Personajes </Link>
      </li>
      </ul>
       </nav>
      <Switch>
     
       <Route path="/personajes">
          <ApiSw></ApiSw>
       </Route>
       <Route path="/:id" exact>
          <Home></Home>
       </Route>
        
       
       </Switch>
      
    </BrowserRouter>
    
    </div>
  );
}

export default App;
//&nbsp