import {BrowserRouter, Routes , Route } from "react-router-dom"

// "pages" component
import Login from "./components/Login"
import Register from "./components/Register"
import Homepage from "./components/customer/Homepage"
import NavigationBarCustomer from "./components/customer/NavigationBarCustomer"

// /"pages" component

// "style"
import "./style/Login.css"
// /"style"



function App() {
  return (
    <BrowserRouter>
      <div className="my-bg">
      <NavigationBarCustomer />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
