import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import layoutPublic from './layoutPublic.css'

const LayoutPublic = () => {
  return (
    <div className="totalContainer">
      < Header />
      <main >
        <Outlet />
      </main>
      < Footer />
    </div>
  );
};

export default LayoutPublic;