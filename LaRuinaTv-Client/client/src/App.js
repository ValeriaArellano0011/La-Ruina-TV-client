import { Admin, Resource, CustomRoutes } from "react-admin";
import { Link, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";



const App = () => {
  return(
    <Routes>
    <Route exact path="/" > </Route>
    <Route exact path='/login'></Route>
    </Routes>
  )
}

export default App;
