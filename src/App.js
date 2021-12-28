// import logo from './logo.svg';
// import { Home } from '@mui/icons-material';
// import { Router } from '@mui/icons-material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router>
    <div className='app'>
    <Header />
      <Switch>
      <Route path="/amazon-clone/checkout">
     
      <Checkout />
      
     
      </Route>
      <Route path="/">
     
      <Home />
      </Route>
      
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
