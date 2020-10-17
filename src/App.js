import React from "react";
import axios from "axios"
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import "./App.css";
import "./background/background.jpg";


export default function App() {
  return (
    <div className="App">
      <div id="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
