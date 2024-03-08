import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Signup from "../components/Singup";
import Login from "../components/Login";
import Contact from "../pages/Contact";


const Routers = () => {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {user ? (
        <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/pizzas/:id" element={<PizzaDetails />} />
          <Route path="/contact" element={<Contact />} />

        </>
      ) : (
        <Route path="/" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};

export default Routers;
