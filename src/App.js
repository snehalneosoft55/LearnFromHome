import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { configureStore } from "./redux/store";


import './App.css';
// import '../src/assets/css/Home.css'

import Home from './pages/Home';
import Registration from './pages/Registration';
import LogIn from './pages/LogIn';
import ForgotPassword from './pages/forgotPassword';
const store = configureStore();


function App() {
  return (
    <Provider store={store}>

    <div className="App">
      <Router>
        <Route path='/' exact component={ Home } />
        <Route path='/Registration' component={ Registration }/>
        <Route path='/LogIn' component={ LogIn } />
        <Route path="/ForgotPassword" component={ ForgotPassword }/>
      </Router>
      
    </div>
    </Provider>
  );
}

export default App;
