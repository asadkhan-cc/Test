import React from "react";
// import Main from "./components/Main/Main";
import './App.css'
import Footer from './components/NewWork/Footer';
import Header from './components/NewWork/Header'
import Content from "./components/NewWork/Content";




function App() {
  return (
    <div>
      <Header></Header>
      {/* <Main className="App-header"></Main> */}
      <Content></Content>

    {/* <Main className="App-header"></Main> */}

      <Footer></Footer>    
    </div>
  );
}

export default App;
