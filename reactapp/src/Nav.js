import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Count from './Count';

function Nav() {
  console.log('Nav')
  return (
    <div className="App">
       <Router>
         <Routes>
           <Route path="/" exact element={<Home/>} />
           <Route path="/count" exact element={<Count/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default Nav;