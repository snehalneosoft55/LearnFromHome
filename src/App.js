import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import './App.css';
// import '../src/assets/css/Home.css'

import Home from './pages/Home';
import Registration from './pages/Registration';
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={ Home } />
        <Route path='/Registration' component={ Registration }/>
        <Route path='/LogIn' component={ LogIn } />
        
      </Router>
      
    </div>
  );
}

export default App;
