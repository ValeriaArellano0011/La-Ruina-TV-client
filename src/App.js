import './App.css';
import Nav from './Components/Nav/Nav';
import View from './Components/Media/View';
import Verify from './Components/Auth/Verify';
import Browser from './Components/Browser/Browser';
// import Product from './Components/Products/Product';
import CreateMedia from './Admin/Requests/CreateMedia';
import EditMedia from './Admin/Requests/EditMedia';
import CreateProduct from './Admin/Requests/CreateProduct';
// import { Tienda } from './Components/Tienda/Tienda';
import { Search } from './Components/Filter/Search';
import { Colaborar } from './Components/Colaborar/Colaborar';
import { Novedades } from './Components/Novedades/Novedades';
import { BackAmp } from './Components/Back&Amp/BackAmp';
import { OptionsCanvas } from './Components/Utils/OptionsCanvas';
import { PlayerList } from './Components/Media/PlayerList'
import { Checkout } from './Components/Checkout/Checkout';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthToken from './Components/Auth/AuthToken';
import React from 'react';
import { useSelector } from 'react-redux'
import { YtSubscribeButton } from './Components/Utils/YtSubscribeButton';
import { EditMediaList } from './Admin/Requests/EditMediaList';
import { EditUsersList } from './Admin/Requests/EditUsersList';
import PlanMP from './Components/MercadopagoPlan/PlanMP.jsx';
import { CanvasMenu } from './Components/Nav/CanvasMenu';


function App() {
  const url = useSelector(state=>state.urlPlayer)
  const option = useSelector(state=>state.option)
  return (
    <div className="App">
      <Switch>
        <>
          <Nav />
            <CanvasMenu/>
          <div className='userPlayerCont'>
          { (url !== '') || (option === 'playlist')?
            <div className='playListCont'>
              <PlayerList url={url} />
            </div> : null
          }  
          </div>
          <div className='bodyApp'>
            <OptionsCanvas/>
            <Route path='/auth'>
              <AuthToken />
            </Route>
            <Route exact path='/'>
              <Redirect to='/browser' />
            </Route>
            <Route exact path='/browser'>
              <Browser />
            </Route>
            <Route path='/verify'>
              <Verify />
            </Route>
            <Route exact path='/novedades'>
              <Novedades />
            </Route>
            <Route exact path='/lanzamientos'>
              <BackAmp />
            </Route>
            <Route exact path='/colaborar'>
              <Colaborar />
            </Route>
            {/* <Route exact path='/tienda'>
              <Tienda />
            </Route>
            <Route path={'/tienda/product/:id'}>
              <Product />
            </Route> */}
            <Route path={'/view/v=:urlid=_type_=:typeMedia=_id_=:id'}>
              <View />
            </Route>
            <Route exact path='/product/create'>
              <CreateProduct />
            </Route>
            <Route exact path='/media/create'>
              <CreateMedia />
            </Route>
            <Route exact path='/media/edit/:connectionId'>
              <EditMedia />
            </Route>
            <Route exact path='/media/edit'>
              <EditMediaList />
            </Route>            
            <Route exact path='/users/edit'>
              <EditUsersList />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            <Route path='/checkout/:type'>
              <Checkout />
            </Route>
            <Route path='/mercadopago/plan'>
              <PlanMP/>
            </Route>
          </div>
        </>
      </Switch>
    </div>
  )
}

export default App;
