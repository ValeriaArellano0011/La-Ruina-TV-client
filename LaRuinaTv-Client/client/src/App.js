
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import {Route} from 'react-router-dom'
import Browser from './Components/Browser';

function App() {
  return (
    <>
    <Route exact path='/' ><LandingPage/></Route> 
   <Route exact path='/browser'><Browser/></Route>
   </>
   
  );
}

export default App;
