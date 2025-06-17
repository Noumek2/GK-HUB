import React from "react";
import Auth from "./Auth";
import bg from './SAVANNA.jpeg'
import './App.css';


function App() {
  return(
      <div className="background" style={{backgroundImage: `url(${bg})` }}>
      <Auth />
    </div>
  );
}
export default App;
