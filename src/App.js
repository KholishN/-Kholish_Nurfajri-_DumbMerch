import {BrowserRouter, Routes , Route } from "react-router-dom"

// "pages" component
import Login from "./components/Login"
import Register from "./components/Register"
import NavigationBarCustomer from "./components/customer/NavigationBarCustomer"
import HomePage from "./components/customer/HomePage"
import DetailPage from "./components/customer/DetailPage"


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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-page/:id" element={<DetailPage />} />

      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
