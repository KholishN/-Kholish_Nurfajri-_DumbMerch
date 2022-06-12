import {BrowserRouter, Routes , Route } from "react-router-dom"

// "pages" component
import Login from "./components/Login"
import Register from "./components/Register"
import HomePage from "./components/customer/HomePage"
import DetailPage from "./components/customer/DetailPage"
import Profile from "./components/customer/Profile"
import Category from "./components/admin/category/Category"
import EditCategory from "./components/admin/category/EditCategory"
import ProductList from "./components/admin/productlist/ProductList"
import EditProductList from "./components/admin/productlist/EditProductList"
import AdminComplain from "./components/admin/AdminComplain"
import CustomerComplain from "./components/customer/CustomerComplain"



// /"pages" component

// "style"
import "./style/Login.css"
// /"style"



function App() {

  return (
    <BrowserRouter>
      <div className="my-bg">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail-page/:id" element={<DetailPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/category/" element={<Category />} />
        <Route path="/edit-category" element={<EditCategory />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/edit-product-list" element={<EditProductList />} />
        <Route path="/complain" element={<CustomerComplain />} />
        <Route path="/admin-complain" element={<AdminComplain />} />


      </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
