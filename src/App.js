import './App.css';
import Home from './Screens/Home';
import Food from './Screens/Food';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Dashboard from './Screens/Dashboard';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
    
          <Route path="/food" element={<Food/>}/>
          <Route path="/sign" element={<Signup/>}/>
          <Route path="/dashb" element={<Dashboard/>}/>

        </Routes>

      </div>
    </BrowserRouter>


  );
}

export default App;
