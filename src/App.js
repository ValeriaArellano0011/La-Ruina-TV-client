import './App.css';
import Nav from './Components/Utils/Nav';
import Browser from './Components/Browser/Browser';
import View from './Components/Media/View';
import { Tienda } from './Components/Tienda/Tienda';
import { Colaborar } from './Components/Colaborar/Colaborar';
import { Novedades } from './Components/Novedades/Novedades';
import { SlideCanvas } from './Components/Utils/SlideCanvas';
import { Lanzamientos } from './Components/Lanzamientos/Lanzamientos';

import { Switch, Route, Redirect } from 'react-router-dom';
import CreateProduct from './Admin/Requests/CreateProduct';
import CreatePost from './Admin/Requests/CreatePost';
import Product from './Components/Tienda/Product';
import Verify from './Components/Auth/Verify';

function App() {
  return (
    <div className="App">
      <Switch>
        <>
          <Nav/>
          <div className='bodyApp'>
          <Route exact path='/'>
              <Redirect to='/browser' />
          </Route>
          <SlideCanvas />
          <Route exact path='/browser'>
            <Browser />
          </Route>
          <Route path='/verify'>
            <Verify/>
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
          <Route path={'/tienda/product/:id'}>
            <Product />
          </Route>
          <Route path={'/view/v=:urlid=_type_=:typeMedia=_id_=:id'}>
            <View />
          </Route>
          <Route exact path='/product/create'>
            <CreateProduct/>
          </Route>
          <Route exact path='/post/create'>
            <CreatePost/>
          </Route>
          </div>
        </>
      </Switch>
    </div>
  )
}

export default App;
