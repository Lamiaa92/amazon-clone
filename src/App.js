import React from "react";
import './App.css';
import Header from './Header';

function App() {
  return (
    // BEM 
    <div className="app"> 
      <Header />
      <Home />
      {/* Home */}
    </div>
  );
}

export default App;
