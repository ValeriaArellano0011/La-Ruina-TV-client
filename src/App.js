import './App.css';
import React from 'react';
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom';

import Nav from './app/components/Nav/Nav';
import View from './app/components/Media/View';
import Enter from './app/components/Auth/Enter';
import Verify from './app/components/Auth/Verify';
import PlanMP from './app/components/MercadopagoPlan/PlanMP.jsx';
import Browser from './app/components/Browser/Browser';
import EditMedia from './app/admin/Requests/EditMedia';
import AuthToken from './app/components/Auth/AuthToken';
import CreateMedia from './app/Admin/Requests/CreateMedia';
import CreateProduct from './app/cdmin/Requests/CreateProduct';

import { Search } from './app/components/Filter/Search';
import { BackAmp } from './app/components/Back&Amp/BackAmp';
import { Checkout } from './app/components/Checkout/Checkout';
import { Colaborar } from './app/components/Colaborar/Colaborar';
import { Novedades } from './app/components/Novedades/Novedades';
import { CanvasMenu } from './app/components/Nav/CanvasMenu';
import { PlayerList } from './app/components/Media/PlayerList'
import { OptionsCanvas } from './app/components/Utils/OptionsCanvas';
import { EditMediaList } from './app/cdmin/Requests/EditMediaList';
import { EditUsersList } from './app/cdmin/Requests/EditUsersList';


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
            <Route path='/admin'>
              <Enter/>
            </Route>
          </div>
        </>
      </Switch>
    </div>
  )
}

export default App;
