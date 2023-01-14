import './App.css';
import Nav from './Components/Utils/Nav';
import View from './Components/Media/View';
import Verify from './Components/Auth/Verify';
import Browser from './Components/Browser/Browser';
import Product from './Components/Products/Product';
import CreateMedia from './Admin/Requests/CreateMedia';
import CreateProduct from './Admin/Requests/CreateProduct';
import { Tienda } from './Components/Tienda/Tienda';
import { Search } from './Components/Filter/Search';
import { Colaborar } from './Components/Colaborar/Colaborar';
import { Novedades } from './Components/Novedades/Novedades';
import { Lanzamientos } from './Components/Lanzamientos/Lanzamientos';
import { CanvasOptions } from './Components/Utils/CanvasOptions';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  console.log(localStorage.getItem('auth'))
  return (
    <div className="App">
      <Switch>
        <>
          <Nav/>
          <div className='bodyApp'>
            <CanvasOptions />
            <Route exact path='/'>
                <Redirect to='/browser' />
            </Route>
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
            <Route exact path='/media/create'>
              <CreateMedia/>
            </Route>
            <Route path='/search'>
              <Search/>
            </Route>
          </div>
        </>
      </Switch>
    </div>
  )
}

export default App;
