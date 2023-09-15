import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Nav from '../components/Nav/Nav';
import Enter from '../components/Auth/Enter';
import Verify from '../components/Auth/Verify';
import PlanMP from '../components/MercadopagoPlan/PlanMP';
import Browser from '../pages/Browser/Browser';
import EditMedia from '../admin/EditMedia/EditMedia';
import AuthToken from '../components/Auth/AuthToken';
import CreateMedia from '../admin/CreateMedia/CreateMedia';
import MediaViewer from '../components/MediaViewer/Viewer';

import { Search } from '../components/Filter/Search';
import { BackAmp } from '../components/Back&Amp/BackAmp';
import { Checkout } from '../components/Checkout/Checkout';
import { Colaborar } from '../components/Colaborar/Colaborar';
import { Novedades } from '../components/Novedades/Novedades';
import { CanvasMenu } from '../components/Nav/CanvasMenu';
import { OptionsCanvas } from '../components/Utils/SlideCanvas';
import { EditMediaList } from '../admin/EditMediaList/EditMediaList';
import { EditUsersList } from '../admin/EditUserList/EditUsersList';


function Router() {
  return (
    <div className="App">
      <Switch>
        <>
          <Nav/>
            <CanvasMenu/>
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
            <Route path={'/view/v=:id'}>
              <MediaViewer/>
            </Route>
            <Route exact path='/media/create'>
              <CreateMedia />
            </Route>
            <Route exact path='/media/edit/:id'>
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

export default Router;
