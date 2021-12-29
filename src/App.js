// import logo from './logo.svg';
// import { Home } from '@mui/icons-material';
// import { Router } from '@mui/icons-material';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import { auth } from './firebase';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { useStateValue } from './StateProvider'

function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log("User is",authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
          
        })

      }
      else {
        dispatch({
           type: 'SET_USER',
          user: null,
       })
      }
    })
  },[])
  return (
    <Router>
    <div className='app'>
    <Header />
        <Switch>
          <Route path="/amazon-clone/login">
            <Login />
          </Route>
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
