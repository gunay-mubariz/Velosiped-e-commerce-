import './App.css';
import { Route, Switch} from  "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Velos from './pages/Velos';
import Accessories from './pages/Accessories';
import Equipment from './pages/Equipment';
import BikeStations from './pages/BikeStations';
import ScrollToTopBtn from './components/ScrollToTopBtn/ScrollToTopBtn';
import Cart from './components/ShoppingCart/Cart';
import SignUp from './components/SignUp/SignUp';
import SingleProduct from './components/VeloProduct/SingleProduct';
import { CartProvider } from './CartContext';

import SpareParts from './pages/SpareParts';
import Footer from './components/Footer/Footer';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
  return (
    <CartProvider>
    <div className="App">
      
     <Navbar className={location.pathname === '/' ? '' : 'black'}  />
        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/velos" component={Velos}  />
          <Route exact path="/accessories" component={Accessories}  />
          <Route exact path="/equipment" component={Equipment}  />
          <Route exact path="/spareparts" component={SpareParts}  />
          <Route exact path="/bikestations" component={BikeStations}  />
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route path="/products/:id" exact component={SingleProduct} />
        </Switch>
      <ScrollToTopBtn/>
     <Footer/>
    </div>
    </CartProvider>
  );
}

export default App;
