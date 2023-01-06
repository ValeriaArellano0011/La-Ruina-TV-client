import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Browser from './components/Browser';
import Novedades from './components/Novedades';
import Lanzamientos from './components/Lanzamientos';
import Colaborar from './components/Colaborar';
import Tienda from './components/Tienda';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path='/browser' component = {Browser}/>
      <Route exact path='/novedades' component = {Novedades}/>
      <Route exact path='/lanzamientos' component = {Lanzamientos}/>
      <Route exact path= '/colaborar' component = {Colaborar}/>
      <Route exact path= '/tienda' component = {Tienda}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
