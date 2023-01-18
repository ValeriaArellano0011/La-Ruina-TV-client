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
import AuthToken from './Components/Auth/AuthToken';
import { URL_API } from './middlewares/misc/config';
import React, { useEffect } from 'react';
import RequestProfile from './Admin/Requests/RequestProfile';

function App() {
  useEffect(() => {
    const getUser = () => {
      fetch(`${URL_API}/auth/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        console.log(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getUser();
  }, [])
  
  return (
    <div className="App">
      <Switch>
        <>
          <Nav/>
          <div className='bodyApp'>
            <CanvasOptions />
            <Route path='/auth'>
                <AuthToken/>
            </Route>
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
