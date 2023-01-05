import { Admin, Resource, CustomRoutes } from "react-admin";
import jsonServerProvider from 'ra-data-json-server'
import Home from "./Components/Home";
import Card from "./Components/Card";
import Dashboard from "./Components/Dashboard";
import { Link, Route } from "react-router-dom";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com")

const App = () => {
  return(
  <Admin dashboard={Dashboard}>
    
    <Resource name="card" list={Card}/>
    <CustomRoutes noLayout>
            <Route path="/home" element={<Home />} />
        </CustomRoutes>
        
  </Admin>
  )
}

export default App;
