import './App.css';
import Browser from './Components/Browser';
import LandingPage from './Components/LandingPage/LandingPage';
import { Tienda } from './Components/Tienda';
import { Colaborar } from './Components/Colaborar';
import { Novedades } from './Components/Novedades';
import { Lanzamientos } from './Components/Lanzamientos';
import { Switch, Route } from 'react-router-dom';




function App() {
  return (
      <div className="App">
          <Switch>
            <Route exact path='/'>
              <LandingPage />
            </Route>
            <div>
              {/* <Nav/> */}
              <div className='bodyApp'>
              {/* <SlideCanvas option={option? option:""}/> */}
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
              {/* <Route path={'/view/v=:urlid=_type_=:typeMedia=_id_=:id'}>
                <View/>
              </Route>
              <Route path={'/play/p=:urlid=_type_=:typeMedia=_id_=:id'}>
                <Play/>
              </Route> */}
              </div>
            </div>
          </Switch>
      </div>
    );
}

export default App;
