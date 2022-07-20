import React from "react";
// import Main from "./components/Main/Main";
import "./App.css";
function App() {
  return (
    <div>
      <header>
        this is a nav bar
        <br />
        <ul className="header ">
          <span>image</span>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>BLOG</li>
          <span>Search</span>
        </ul>
      </header>
      {/* <Main className="App-header"></Main> */}
    </div>
  );
}

export default App;
