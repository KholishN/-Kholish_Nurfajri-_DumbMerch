import './App.css';
import {BrowserRouter, Routes , Route } from "react-router-dom"

// "pages" component
import Login from "./components/Login"
import Register from "./components/Register"

import "./style/Login.css"

function App() {
  return (
    <BrowserRouter>
      <div className="my-bg">

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
