 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Body from "./Components/Body";
import Profile from "./Components/Profile";
import Login from "./Components/Login";

import "./App.css";

function App() {
  
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path='/' element={<Body/>} >
            <Route path='/login' element={<Login/>} />
            <Route path='/profile' element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>


      
    </>
  );
}

export default App;
