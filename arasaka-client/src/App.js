/** @format */
import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import TourCard from "./component/TourCard";
import LoginForm from "./component/LoginForm";
import RegisterPage from "./pages/registerPage";
import { refresh } from "./redux/authenSlice";
import AdminProduct from "./pages/adminProduct";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";

const About = () => <h1>Giới thiệu</h1>;

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshLoading = () => dispatch(refresh({ dispatch, navigate }));

  useEffect(() => {
    refreshLoading();
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<TourCard />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/*" element={<AdminProduct />} />
      </Routes>
    </div>
  );
}

export default App;
