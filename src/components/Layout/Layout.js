import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";

import { useSelector } from "react-redux";

const Layout = () => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);
  const user = localStorage.getItem("token");

  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      {user && <Header />}
      {showCart && <Carts />}
      <div>
        <Routes />
      </div>
      {user && <Footer />}
    </div>
  );
};

export default Layout;
