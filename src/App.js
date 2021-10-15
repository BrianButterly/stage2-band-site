import React from "react";
import Menu from './Components/Menu'
import Home from './Components/Home'
import Shows from './Components/Shows'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <AboutUs/>
      <Shows/>
      <Contact/>
    </div>
  );
}

export default App;
