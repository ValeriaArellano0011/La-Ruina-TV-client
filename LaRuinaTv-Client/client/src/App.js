import './App.css';
import Nav from './Components/Nav';
import Browser from './Components/Browser';
import View from './Components/View';
import Play from './Components/Play';
import { Tienda } from './Components/Tienda';
import { Colaborar } from './Components/Colaborar';
import { Novedades } from './Components/Novedades';
import { SlideCanvas } from './Components/SlideCanvas';
import { Lanzamientos } from './Components/Lanzamientos';

import { Switch, Route } from 'react-router-dom';

function App() {
  
  return (
      <div className="App">
          <Switch>
            <div>
              <Nav/>
              <div className='bodyApp'>
              <SlideCanvas />
              <Route exact path='/browser'>
                <Browser />
              </Route>
              <Route exact path='/novedades'>
                <Novedades />
              </Route>
              <Route exact path='/lanzamientos'>
                <Lanzamientos />
              </Route>
              <Route exact path='/colaborar'>
                <Colaborar />
              </Route>
              <Route exact path='/tienda'>
                <Tienda />
              </Route>
              <Route path={'/view/v=:urlid=_type_=:typeMedia=_id_=:id'}>
                <View/>
              </Route>
              <Route path={'/play/p=:urlid=_type_=:typeMedia=_id_=:id'}>
                <Play/>
              </Route>
              </div>
            </div>
          </Switch>
      </div>
    )
}

export default App;
