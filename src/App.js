import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Payment from "./Payment";
import Home from './Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe();

function App() {
  const [{}, dispatch] = useStateValue
  ("pk_test_51IFNJ6H2SnrPszu3E8gdC3d0pm7pIZhoU2EGFoRn1uVtzF6JAASYiN9Dbqxl9wf7DiVNMEiVUM0WaydX68zqbQXj00ayRrsXfX");

  // Listener, will only run once when the app component loads..
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {   //As soon as the app loads, we attach the listener, an observer
      console.log('THE USER IS >>>>', authUser);

      if (authUser){
        // the user just logged in / or was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        });

      }
    }) 
  }, [])

  return (
    // BEM 
    <Router>
      <div className="app"> 
        <Switch>
          <Route path="/login">
             <Login />
          </Route>
          <Route path="/checkout">
             <Header />
             <Checkout />
          </Route>
          <Route path="/Payment">
             <Header />
             <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
