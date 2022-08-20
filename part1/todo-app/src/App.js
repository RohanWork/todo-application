import "./App.css";
// import React from 'react';
import React from "react";

function App() {
    return (
        <div className="App">
          Hello, I am Rohan.
          <FirstComponent />
        </div>
    );
}

function FirstComponent() {
    return (
      <div className="FirstComponent">
        I am creating a todo application using react and springboot
      </div>
    );
}

export default App;
