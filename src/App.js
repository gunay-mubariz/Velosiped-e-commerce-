import './App.css';
import { Route, Switch} from  "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Velos from './pages/Velos';
import Accessories from './pages/Accessories';
import BikeStations from './pages/BikeStations';
import ScrollToTopBtn from './components/ScrollToTopBtn/ScrollToTopBtn';

import SpareParts from './pages/SpareParts';
import Footer from './components/Footer/Footer';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  return (
    <div className="App">
      
     <Navbar className={location.pathname === '/' ? '' : 'black'}  />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/velos" component={Velos}  />
          <Route exact path="/accessories" component={Accessories}  />
          <Route exact path="/accessories" component={Accessories}  />
          <Route exact path="/spareparts" component={SpareParts}  />
          <Route exact path="/bikestations" component={BikeStations}  />
        </Switch>
      <ScrollToTopBtn/>
     <Footer/>
    </div>
  );
}

export default App;
